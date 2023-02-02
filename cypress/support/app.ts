declare namespace Cypress {
    interface Chainable {
        /**
         * Navigates to the home page of our application
         */
        visitHomepage(): Chainable<Element>;

        /**
         * Navigates to the login page of our application
         */
        visitLoginPage(): Chainable<Element>;

        /**
         * Navigates to the feedback page of our application
         */
        visitFeedbackPage(): Chainable<Element>;

        /**
         * @param seconds - how many seconds should the execution wait
         */
        waitForSeconds(seconds: number): Chainable<Element>;

        getElement<T extends Node = HTMLElement>(
            selector: string
        ): Chainable<JQuery<T>>;

        setResolution(
            preset: ViewportPreset | [number, number],
            orientation?: ViewportOrientation
        ): Chainable<null>;
    }
}

Cypress.Commands.add('visitHomepage', () => {
    cy.visit('/index.html');
});

Cypress.Commands.add('visitLoginPage', () => {
    cy.visit('/login.html');
});

Cypress.Commands.add('visitFeedbackPage', () => {
    cy.visit('/feedback.html');
});

Cypress.Commands.add('waitForSeconds', (seconds) => {
    cy.wait(seconds * 1000);
});

Cypress.Commands.add('getElement', (selector) => {
    return cy.get(`[data-test="${selector}"]`);
});

// visual
Cypress.Commands.add('setResolution', (size) => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
    } else {
        cy.viewport(size);
    }
});
