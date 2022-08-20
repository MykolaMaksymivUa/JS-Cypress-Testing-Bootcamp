describe('Login / Logout Test', () => {
    before(function () {
        cy.visitHomepage();
        cy.url().should('include', 'index.html');
        cy.get('#signin_button').click();
    });

    it('should try to login with invalid data & display error message', () => {
        cy.login('invalid username', 'invalid password');
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain', 'Login and/or password are wrong');
    });

    it('should login to application', () => {
        // cy.loginMockUser();
        cy.visitHomepage();
        cy.get('#signin_button').click();

        cy.fixture('loginData').then(({ username, password }) => {
            cy.login(username, password);
        });
        cy.get('ul.nav-tabs').should('be.visible');
    });

    it('should logout from application', () => {
        cy.contains('username').click();
        cy.get('#logout_link').click();
        cy.url().should('include', 'index.html');
    });
});
