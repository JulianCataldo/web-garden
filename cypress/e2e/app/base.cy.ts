describe('App — Base', () => {
  it('Open demo', () => {
    cy.visit('http://localhost:3000/');
  });

  it('BODY classes & id', () => {
    cy.get('body')
      .should('have.class', 'other-class')
      .should('have.class', 'dabadi-dabada');
  });
  it('HTML classes & id & lang', () => {
    cy.get('html')
      .should('have.attr', 'lang', 'es')
      .should('have.id', 'the-id')
      .should('have.class', 'js')
      .should('have.class', 'some-class');
  });
});
