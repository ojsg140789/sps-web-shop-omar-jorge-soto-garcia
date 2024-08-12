describe('Primer', () => {
    beforeEach('Open', () => {
        cy.visit('http://localhost:4200');
    });

    it('Welcome', () => {
        cy.contains('Bienvenido');
    });
});