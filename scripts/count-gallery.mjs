import fs from 'fs';

const content = fs.readFileSync('src/data/content.ts', 'utf8');

const projectsBlockStart = content.indexOf('export const PROJECTS: Project[] = [');
const projectsBlockEnd = content.indexOf('export const BRAND_AUDIT_PACKAGES:');
const projectsContent = content.slice(projectsBlockStart, projectsBlockEnd);

const projectChunks = projectsContent.split(/\n\s*\{\s*\n\s*id:\s*'/);

projectChunks.slice(1).forEach((chunk) => {
  const projectId = chunk.split("'")[0];
  const galleryPart = chunk.slice(chunk.indexOf('galleryImages: ['));
  const gRegex = /url:\s*([^\n,]+)/g;
  let count = 0;
  while (gRegex.exec(galleryPart) !== null) {
    count++;
  }
  console.log(`${projectId}: ${count} gallery images`);
});
