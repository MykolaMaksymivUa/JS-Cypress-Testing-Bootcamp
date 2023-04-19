describe('Visual Regression - Login Page', () => {
    before(function () {
        cy.loginMockUser();
    });

    it('Desktop Layout', () => {
        cy.setResolution([1280, 720]);
        cy.matchImageSnapshot();
    });

    it('Tablet Layout', () => {
        cy.setResolution('iphone-6');
        cy.matchImageSnapshot();
    });

    it('Mobile Layout', () => {
        cy.setResolution('ipad-2');
        cy.matchImageSnapshot();
    });
});
