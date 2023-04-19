import { defineConfig } from 'cypress';

export default defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    video: false,
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    retries: {
        runMode: 2,
        openMode: 0,
    },
    env: {
        API_PREFIX: 'https://pokeapi.co/api/v2',
        REAL_APP: {
            username: 'cypress-bootcamp@gmail.com',
            password: 'cypress-bootcamp@gmail.com',
            apiUrl: 'https://api.realworld.io/api',
            baseUrl: 'http://localhost:4200/',
        },
    },
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config);
        },
        baseUrl: 'http://zero.webappsecurity.com',
    },
});
