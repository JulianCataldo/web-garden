describe('App — <Base>', () => {
  it('Open demo', () => {
    cy.visit('http://localhost:3000/');
  });

  it('Body classes & id', () => {
    cy.get('body')
      .should('have.class', 'other-class')
      .should('have.class', 'dabadi-dabada');
  });
  it('HTML classes & id & lang', () => {
    cy.get('html')
      .should('have.attr', 'lang', 'es')
      .should('have.id', 'the-id')
      .should('have.class', 'some-class');
  });
  it('JS enabled Class', () => {
    cy.get('html').should('have.class', 'js');
  });
  it('Body slot nested element', () => {
    cy.get('main').should('contain', 'a');
    cy.get('main').should('contain', 'ul');
  });
  it('Head slot nested element', () => {
    cy.get('head').children().should('have.length.at.least', 4);
  });
});
