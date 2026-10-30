import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { identityHtml } from './identity-html.ts';

export default defineConfig({
  plugins: [react(), tailwindcss(), identityHtml()],
  // "localhost" resolves to both ::1 and 127.0.0.1 on Windows; Vite would bind only one of them and the
  // browser could pick the other ("connection refused"). Bind IPv4 explicitly.
  server: { host: '127.0.0.1' },
  preview: { host: '127.0.0.1' },
});
