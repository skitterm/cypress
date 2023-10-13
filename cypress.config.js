const { defineConfig } = require("cypress");
const { archiveCypress } = require('@chromaui/test-archiver'); 
// call the next part of things from here, at least...

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        passSnapshot(snapshot) {
          archiveCypress(snapshot)
          return null;
        }
      })
    },
  },
});
