Cypress.Commands.add('login', (username, password) => {
    cy.get('#user_login').type(username);
    cy.get('#user_password').type(password);
    cy.contains('Sign in').click();

    it('should navigate to account summary page', () => {
        cy.url().should('contain', '/account-summary.html');
    });
});

Cypress.Commands.add('loginMockUser', () => {
    cy.visitHomepage();
    cy.get('#signin_button').click();

    cy.fixture('loginData').then(({ username, password }) => {
        cy.login(username, password);
    });
});

Cypress.Commands.add('headlessLogin', () => {
    const realAppVars = Cypress.env('REAL_APP');
    const userCredentials = {
        user: {
            email: realAppVars.username,
            password: realAppVars.password,
        },
    };

    cy.request('POST', realAppVars.apiUrl + '/users/login', userCredentials)
        .its('body')
        .then((body) => {
            const token = body.user.token;

            // cypress wrap an object with cy yield method wrapper
            cy.wrap(token).as('token');
            cy.visit(realAppVars.baseUrl, {
                onBeforeLoad(win) {
                    win.localStorage.setItem('jwtToken', token);
                },
            });
        });
});

Cypress.Commands.add('submitFeedback', (name, email, subject, message) => {
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#subject').type(subject);
    cy.get('#comment').type(message);
    cy.contains('Send Message').click();
});
