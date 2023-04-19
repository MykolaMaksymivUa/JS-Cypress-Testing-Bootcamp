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

Cypress.Commands.add('getElementByControl', (selector) => {
    return cy.get(`'[formcontrolname="${selector}"]`);
});

// visual
Cypress.Commands.add('setResolution', (size) => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
    } else {
        cy.viewport(size);
    }
});
