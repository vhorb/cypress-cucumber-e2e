// @ts-nocheck
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: '**/*.{feature,features}',
    excludeSpecPattern: '*.ts',
  },
})
