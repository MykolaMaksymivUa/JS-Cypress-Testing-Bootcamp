/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * @param username - takes username or id
         * @param password - takes user password
         */
        login(username: string, password: string): Chainable<Element>;

        loginMockUser(): Chainable<Element>;

        headlessLogin(): Chainable<Element>;

        /**
         *
         * @param name - takes name of the message author
         * @param email - takes email (there is no validation on the backend)
         * @param subject - takes subjects of the message
         * @param message - the messages of the author
         */
        submitFeedback(name: string, email: string, subject: string, message: string): Chainable<Element>;
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

        getElement<T extends Node = HTMLElement>(selector: string): Chainable<JQuery<T>>;

        getElementByControl<T extends Node = HTMLElement>(selector: string): Chainable<JQuery<T>>;

        setResolution(preset: ViewportPreset | [number, number], orientation?: ViewportOrientation): Chainable<null>;
    }
}
