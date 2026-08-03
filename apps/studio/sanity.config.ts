import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'leonore-portfolio',
  title: 'Hengki Pranoto Portfolio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'portfolio',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes }
});
