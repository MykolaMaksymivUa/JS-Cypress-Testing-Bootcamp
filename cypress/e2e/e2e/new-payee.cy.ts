describe('New Payee Test', () => {
    before(function () {
        cy.loginMockUser();
    });

    it('should add new payee to the list', () => {
        cy.get('#pay_bills_tab').click();
        cy.contains('Add New Payee').click();
        cy.get('#np_new_payee_name').type('Name');
        cy.get('#np_new_payee_address').type('Adress');
        cy.get('#np_new_payee_account').type('123456789');
        cy.get('#np_new_payee_details').type('Detail');
        cy.get('#add_new_payee').click();

        cy.get('#alert_content').should('be.visible').and('contain', 'The new payee Name was successfully created');
    });
});
