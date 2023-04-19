export const REAL_APP_CONFIG = Cypress.env('REAL_APP');

export const REAL_APP_ROUTES = {
    articles: REAL_APP_CONFIG.apiUrl + '/articles',
    tags: REAL_APP_CONFIG.apiUrl + '/tags',
    feed: REAL_APP_CONFIG.apiUrl + '/articles/feed*',
};
