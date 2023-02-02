describe('Demo Test', () => {
    it('Should open login page', () => {
        cy.visitLoginPage();
        // cy.waitForSeconds(5);

        // create login function
        cy.fixture('loginData').then(({ username, password }) => {
            cy.login(username, password);
        });
        // cy.clearCookies({ log: true });
        // cy.clearLocalStorage('test', { log: true });
    });
});
