describe('Visual Regression - Chart.js', () => {
    before(function () {
        cy.visit(
            // 'https://www.chartjs.org/docs/latest/samples/line/line.html'
            'https://www.chartjs.org/docs/latest/samples/line/interpolation.html'
        );
    });

    it('should verify chart with initial values snapshot', () => {
        cy.waitForSeconds(1);
        cy.get('.chart-view').matchImageSnapshot();
    });

    // it('after dataset remove should match snapshot with only 1 dataset', () => {
    //     cy.waitForSeconds(1);
    //     cy.get('.chart-view').matchImageSnapshot();
    // });
    // it('should match snapshot', () => {
    //     // cy.get('#charts').matchImageSnapshot();
    //     cy.get('#ext-sprite-1163').matchImageSnapshot();
    // });
});
