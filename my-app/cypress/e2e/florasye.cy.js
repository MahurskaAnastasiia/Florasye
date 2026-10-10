describe('Florasye E2E Navigation Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('перевірка завантаження головної сторінки', () => {
        cy.contains('Get started', { matchCase: false }).should('exist');
    });
});