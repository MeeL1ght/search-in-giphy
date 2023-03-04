import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/** @type {import('vite').UserConfig} */
export default defineConfig(({ command, mode }) => {
  const env      = loadEnv(mode, process.cwd())
  const devSetup = {
    plugins: [react()],
    server: {
      host: env.VITE_HOST,
      port: +env.VITE_PORT,
    }
  }

  if (command === 'serve')
    return devSetup
})
