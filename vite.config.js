import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base : '/cicd-jenkinS211/',
  plugins: [react()],

})
