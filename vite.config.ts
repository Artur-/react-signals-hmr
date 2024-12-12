import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins:[[
              'module:@preact/signals-react-transform',
              {
                mode: 'all', // Needed to include translations which do not use something.value
              },
            ]]
    }
  })],
})
