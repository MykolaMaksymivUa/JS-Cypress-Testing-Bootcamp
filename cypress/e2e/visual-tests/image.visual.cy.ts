/// <reference types="cypress" />
const pages = ['http://www.example.com'];

const sizes: (Cypress.ViewportPreset | [number, number])[] = [
    'iphone-6',
    'ipad-2',
    [1280, 800],
];

xdescribe('Visual Regression', () => {
    sizes.forEach((size) => {
        pages.forEach((page) => {
            it(`should match ${page} in resolution ${size}`, () => {
                // default date - 1970
                cy.clock(new Date(Date.UTC(2022, 1, 23, 0, 0, 0, 0)));
                cy.setResolution(size);
                cy.visit(page);
                cy.matchImageSnapshot();
            });
        });
    });
});

describe('Single Element Snapshot', () => {
    it('should match single element on the page with predefined date', () => {
        cy.visit('http://www.example.com');
        cy.get('h1').matchImageSnapshot();
    });
});
