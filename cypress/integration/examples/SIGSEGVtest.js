describe('SIGSEGV test suite', () => {

    it('step', () => {
        cy.visit("http://example.com");
        cy.url().should('include','example')

    })

});
