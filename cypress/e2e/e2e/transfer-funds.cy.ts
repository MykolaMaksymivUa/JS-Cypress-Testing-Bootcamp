const fromAccountIDSelector = '#tf_fromAccountId';
const toAccountIDSelector = '#tf_toAccountId';
const submitBtnSelector = '#btn_submit';
const amountSelector = '#tf_amount';
const descriptionSelector = '#tf_description';

describe('Transfer Funds Verification Test', () => {
    before(function () {
        cy.loginMockUser();
    });

    it('should fill transfer funds form', () => {
        cy.get('#transfer_funds_tab').click();
        cy.get(fromAccountIDSelector).select('2');
        cy.get(toAccountIDSelector).select('4');
        cy.get(amountSelector).type('1000');
        cy.get(descriptionSelector).type('just some text');
        cy.get(submitBtnSelector).click();
        // });

        // it('should verify correct data', () => {
        cy.get(fromAccountIDSelector).should('have.value', 'Checking').should('be.disabled');
        cy.get(toAccountIDSelector).should('have.value', 'Loan').should('be.disabled');
        cy.get(amountSelector).should('have.value', '1000').should('be.disabled');
        cy.get('#btn_submit').click();
        // });

        // it('on confirm user should see success alert', () => {
        cy.get('.alert-success')
            .should('be.visible')
            .should('contain.text', 'You successfully submitted your transaction.');
    });
});
