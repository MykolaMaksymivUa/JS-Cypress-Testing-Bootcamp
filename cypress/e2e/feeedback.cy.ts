describe('Feedback Test', () => {
    it('Should submit feedback form', () => {
        cy.visitFeedbackPage();

        cy.fixture('feedbackData').then(({ name, email, subject, message }) => {
            // cy.submitFeedback(name, email, subject, message);
            cy.get('#name').type(name);
            cy.get('#email').type(email);
            cy.get('#subject').type(subject);
            cy.get('#comment').type(message);
            cy.contains('Send Message').click();
        });
    });
});
