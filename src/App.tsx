import React, { useState } from 'react';
import { NavPage, Project, SectorCategory } from './types';
import { PROJECTS } from './data/content';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { Industries } from './components/Industries';
import { SelectedWork } from './components/SelectedWork';
import { EngagementModels } from './components/EngagementModels';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { TickerMarquee } from './components/TickerMarquee';
import { StatsAndFacts } from './components/StatsAndFacts';
import { FaqSection } from './components/FaqSection';
import { TestimonialsWall } from './components/TestimonialsWall';
import { TalkShopSection } from './components/TalkShopSection';

// Code-split sub-pages and heavy modals so initial home landing load is instantaneous
const WorkArchive = React.lazy(() => import('./components/WorkArchive').then((m) => ({ default: m.WorkArchive })));
const ProjectDetailView = React.lazy(() => import('./components/ProjectDetailView').then((m) => ({ default: m.ProjectDetailView })));
const ProcessView = React.lazy(() => import('./components/ProcessView').then((m) => ({ default: m.ProcessView })));
const PricingView = React.lazy(() => import('./components/PricingView').then((m) => ({ default: m.PricingView })));
const ArticlesView = React.lazy(() => import('./components/ArticlesView').then((m) => ({ default: m.ArticlesView })));
const ServicesView = React.lazy(() => import('./components/ServicesView').then((m) => ({ default: m.ServicesView })));
const BrandAuditModal = React.lazy(() => import('./components/BrandAuditModal').then((m) => ({ default: m.BrandAuditModal })));
const IntakeBriefModal = React.lazy(() => import('./components/IntakeBriefModal').then((m) => ({ default: m.IntakeBriefModal })));

function SubPageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-12 text-center">
      <div className="w-10 h-10 border-2 border-white/10 border-t-[#D4FF00] rounded-full animate-spin mb-4" />
      <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">Loading Studio View...</span>
    </div>
  );
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Portfolio render error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#080C14] text-[#f4f5f7] flex flex-col items-center justify-center p-6 text-center select-none">
          <div className="w-12 h-12 rounded-lg bg-[#D4FF00] text-[#080C14] font-bold text-base flex items-center justify-center mb-6 shadow-lg shadow-[#D4FF00]/20">
            SJ
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
            Saeed Jabbari Studio
          </h1>
          <p className="text-sm text-neutral-400 max-w-md mb-6 leading-relaxed">
            Commercial Branding, Packaging Design &amp; Digital Solutions.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
            className="px-6 py-3 rounded bg-[#D4FF00] text-[#080C14] font-bold text-xs tracking-[0.14em] uppercase hover:bg-white transition-all cursor-pointer shadow-lg shadow-black/20"
          >
            Reload Studio Portfolio
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const parseRoute = (): { page: NavPage; projectId?: string; sector?: SectorCategory } => {
  if (typeof window === 'undefined') return { page: 'home' };
  const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
  if (!rawHash || rawHash === 'home') {
    return { page: 'home' };
  }
  if (rawHash.startsWith('project/')) {
    const pId = rawHash.replace('project/', '').split('?')[0];
    return { page: 'project-detail', projectId: pId };
  }
  if (rawHash.startsWith('work')) {
    const qIndex = rawHash.indexOf('?');
    if (qIndex !== -1) {
      const search = new URLSearchParams(rawHash.slice(qIndex));
      const sector = search.get('sector') as SectorCategory | null;
      if (sector && ['cosmetics', 'fmcg', 'b2b', 'automotive'].includes(sector)) {
        return { page: 'work', sector };
      }
    }
    return { page: 'work' };
  }
  if (rawHash.startsWith('services')) {
    return { page: 'services' };
  }
  if (rawHash.startsWith('process')) {
    return { page: 'process' };
  }
  if (rawHash.startsWith('pricing')) {
    return { page: 'pricing' };
  }
  if (rawHash.startsWith('insights') || rawHash.startsWith('articles')) {
    return { page: 'insights' };
  }
  return { page: 'home' };
};

const resetScrollTop = () => {
  try {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  } catch {
    window.scrollTo(0, 0);
  }
  if (typeof document !== 'undefined') {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
};

function MainApp() {
  const [currentPage, setCurrentPage] = useState<NavPage>(() => parseRoute().page);
  const [selectedProject, setSelectedProject] = useState<Project>(() => {
    const init = parseRoute();
    if (init.projectId) {
      const found = PROJECTS.find((p) => p.id === init.projectId);
      if (found) return found;
    }
    return PROJECTS[0];
  });
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [archiveInitialSector, setArchiveInitialSector] = useState<SectorCategory | 'all'>(() => {
    const init = parseRoute();
    return init.sector || 'all';
  });

  const handleNavigate = (page: NavPage) => {
    let targetHash = '#/';
    if (page === 'home') targetHash = '#/';
    else if (page === 'work') targetHash = '#/work';
    else if (page === 'services') targetHash = '#/services';
    else if (page === 'process') targetHash = '#/process';
    else if (page === 'pricing') targetHash = '#/pricing';
    else if (page === 'insights' || page === 'articles') targetHash = '#/insights';

    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      setCurrentPage(page);
      resetScrollTop();
    }
  };

  const handleOpenProjectDetail = (proj: Project) => {
    setSelectedProject(proj);
    const targetHash = `#/project/${proj.id}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      setCurrentPage('project-detail');
      resetScrollTop();
    }
  };

  const handleSelectSectorFromHome = (sectorId: SectorCategory) => {
    setArchiveInitialSector(sectorId);
    const targetHash = `#/work?sector=${sectorId}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      setCurrentPage('work');
      resetScrollTop();
    }
  };

  const handleExploreWorks = () => {
    const workElem = document.getElementById('work');
    if (workElem && currentPage === 'home') {
      workElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleNavigate('work');
    }
  };

  const handleExploreServices = () => {
    const capElem = document.getElementById('capabilities');
    if (capElem && currentPage === 'home') {
      capElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleNavigate('services');
    }
  };

  // Synchronize route with hash changes (browser Back/Forward buttons and external links)
  React.useEffect(() => {
    const handleHashChange = () => {
      const route = parseRoute();
      setCurrentPage(route.page);
      if (route.projectId) {
        const found = PROJECTS.find((p) => p.id === route.projectId);
        if (found) setSelectedProject(found);
      }
      if (route.sector) {
        setArchiveInitialSector(route.sector);
      }
      resetScrollTop();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync document page title with current page
  React.useEffect(() => {
    const titles: Record<NavPage, string> = {
      home: 'Saeed Jabbari — Branding, Packaging & Website Design Solutions',
      work: 'Selected Works & Case Studies — Saeed Jabbari',
      services: 'Services & Capabilities — Saeed Jabbari',
      process: '5-Phase Commercial Process — Saeed Jabbari',
      pricing: 'Commercial Engagement & Pricing — Saeed Jabbari',
      insights: 'Articles & Strategic Insights — Saeed Jabbari',
      articles: 'Articles & Strategic Insights — Saeed Jabbari',
      'project-detail': selectedProject ? `${selectedProject.title} — Saeed Jabbari Studio` : 'Project Detail — Saeed Jabbari Studio'
    };
    if (typeof document !== 'undefined') {
      document.title = titles[currentPage] || titles.home;
    }
  }, [currentPage, selectedProject]);

  return (
    <div className="min-h-screen flex flex-col bg-[#080c14] text-[#f4f5f7] selection:bg-[#D4FF00] selection:text-[#080c14]">
      {/* Main Studio Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBrief={() => setIsBriefModalOpen(true)}
      />

      {/* Main Independent Page Rendering */}
      <main className="flex-1" key={currentPage + (currentPage === 'project-detail' ? `-${selectedProject?.id}` : '')}>
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-150">
            <Hero
              onExploreWorks={handleExploreWorks}
              onOpenAudit={() => setIsAuditModalOpen(true)}
              onExploreServices={handleExploreServices}
            />
            <TickerMarquee />
            <Capabilities
              onSelectCapability={() => handleNavigate('process')}
            />
            <SelectedWork
              onViewAll={() => {
                setArchiveInitialSector('all');
                handleNavigate('work');
              }}
              onSelectProject={handleOpenProjectDetail}
            />
            <StatsAndFacts
              onOpenBrief={() => setIsBriefModalOpen(true)}
              onExploreProcess={() => handleNavigate('process')}
            />
            <Industries onSelectSector={handleSelectSectorFromHome} />
            <TestimonialsWall />
            <EngagementModels
              onViewPricing={() => handleNavigate('pricing')}
              onRequestAudit={() => setIsAuditModalOpen(true)}
              onDiscussProject={() => setIsBriefModalOpen(true)}
              onInquireRetainer={() => setIsBriefModalOpen(true)}
            />
            <FaqSection onOpenBrief={() => setIsBriefModalOpen(true)} />
            <TalkShopSection
              onOpenBrief={() => setIsBriefModalOpen(true)}
              onRequestAudit={() => setIsAuditModalOpen(true)}
            />
          </div>
        )}

        {currentPage === 'services' && (
          <React.Suspense fallback={<SubPageLoader />}>
            <div className="animate-in fade-in duration-150">
              <ServicesView
                onOpenBrief={() => setIsBriefModalOpen(true)}
                onSelectProject={handleOpenProjectDetail}
                onNavigateToProcess={() => handleNavigate('process')}
              />
              <TalkShopSection
                onOpenBrief={() => setIsBriefModalOpen(true)}
                onRequestAudit={() => setIsAuditModalOpen(true)}
              />
            </div>
          </React.Suspense>
        )}

        {currentPage === 'work' && (
          <React.Suspense fallback={<SubPageLoader />}>
            <div className="animate-in fade-in duration-150">
              <WorkArchive
                initialSector={archiveInitialSector}
                onSelectProject={handleOpenProjectDetail}
              />
              <StatsAndFacts
                onOpenBrief={() => setIsBriefModalOpen(true)}
                onExploreProcess={() => handleNavigate('process')}
              />
              <TalkShopSection
                onOpenBrief={() => setIsBriefModalOpen(true)}
                onRequestAudit={() => setIsAuditModalOpen(true)}
              />
            </div>
          </React.Suspense>
        )}

        {currentPage === 'project-detail' && (
          <React.Suspense fallback={<SubPageLoader />}>
            <div className="animate-in fade-in duration-150">
              <ProjectDetailView
                project={selectedProject}
                onBackToArchive={() => handleNavigate('work')}
                onSelectProject={handleOpenProjectDetail}
                onOpenBrief={() => setIsBriefModalOpen(true)}
              />
              <TalkShopSection
                onOpenBrief={() => setIsBriefModalOpen(true)}
                onRequestAudit={() => setIsAuditModalOpen(true)}
              />
            </div>
          </React.Suspense>
        )}

        {currentPage === 'process' && (
          <React.Suspense fallback={<SubPageLoader />}>
            <div className="animate-in fade-in duration-150">
              <ProcessView onOpenBrief={() => setIsBriefModalOpen(true)} />
              <TalkShopSection
                onOpenBrief={() => setIsBriefModalOpen(true)}
                onRequestAudit={() => setIsAuditModalOpen(true)}
              />
            </div>
          </React.Suspense>
        )}

        {currentPage === 'pricing' && (
          <React.Suspense fallback={<SubPageLoader />}>
            <div className="animate-in fade-in duration-150">
              <PricingView
                onRequestAudit={() => setIsAuditModalOpen(true)}
                onDiscussProject={() => setIsBriefModalOpen(true)}
                onInquireRetainer={() => setIsBriefModalOpen(true)}
                onOpenBrief={() => setIsBriefModalOpen(true)}
              />
              <TalkShopSection
                onOpenBrief={() => setIsBriefModalOpen(true)}
                onRequestAudit={() => setIsAuditModalOpen(true)}
              />
            </div>
          </React.Suspense>
        )}

        {(currentPage === 'insights' || currentPage === 'articles') && (
          <React.Suspense fallback={<SubPageLoader />}>
            <div className="animate-in fade-in duration-150">
              <ArticlesView onOpenBrief={() => setIsBriefModalOpen(true)} />
              <TalkShopSection
                onOpenBrief={() => setIsBriefModalOpen(true)}
                onRequestAudit={() => setIsAuditModalOpen(true)}
              />
            </div>
          </React.Suspense>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBrief={() => setIsBriefModalOpen(true)}
      />

      {/* 1:1 Forensic Brand & Shelf Audit Modal - Lazy loaded only when triggered */}
      {isAuditModalOpen && (
        <React.Suspense fallback={null}>
          <BrandAuditModal
            isOpen={isAuditModalOpen}
            onClose={() => setIsAuditModalOpen(false)}
            onOpenBrief={() => setIsBriefModalOpen(true)}
          />
        </React.Suspense>
      )}

      {/* Client Intake Brief Wizard - Lazy loaded only when triggered */}
      {isBriefModalOpen && (
        <React.Suspense fallback={null}>
          <IntakeBriefModal
            isOpen={isBriefModalOpen}
            onClose={() => setIsBriefModalOpen(false)}
          />
        </React.Suspense>
      )}

      {/* Floating Back to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <MainApp />
    </ErrorBoundary>
  );
}

