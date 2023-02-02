const API_PREFIX = Cypress.env('API_PREFIX');

describe('REST API Test with Cypress', () => {
    it('API TEST - Validate Header', () => {
        cy.request(`${API_PREFIX}/pokemon/25`).as('pokemon');
        cy.get('@pokemon')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });

    it('API TEST - Validate Status Code', () => {
        cy.request(`${API_PREFIX}/pokemon/25`).as('pokemon');
        cy.get('@pokemon').its('status').should('equal', 200);
    });

    it('API TEST - Validate Name Value', () => {
        cy.request(`${API_PREFIX}/pokemon/25`).as('pokemon');
        cy.get('@pokemon').its('body').should('include', { name: 'pikachu' });
    });

    it('API TEST - Validate Negative Status Code', () => {
        cy.request({
            method: 'GET',
            url: `${API_PREFIX}/pokemon/1000`,
            failOnStatusCode: false,
        }).as('pokemon');
        cy.get('@pokemon').its('status').should('equal', 404);
    });

    it('API TEST - Challenge', () => {
        cy.request('https://api.chucknorris.io/jokes/random').as('joke');
        cy.get('@joke').its('status').should('equal', 200);
    });
});
