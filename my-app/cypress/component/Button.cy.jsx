import React from 'react';

describe('Button Component', () => {
    it('відображає текст кнопки', () => {
        cy.mount(
            <button style={{ padding: '10px 20px', backgroundColor: '#8A9A5B', color: '#fff' }}>
                Додати квіти
            </button>
        );
        cy.get('button').should('be.visible').and('contain', 'Додати квіти');
    });
});