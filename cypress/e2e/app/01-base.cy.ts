describe('App — <Base>', () => {
  it('Open demo', () => {
    cy.visit('http://localhost:2425/');
  });

  it('Body classes & id', () => {
    cy.get('body')
      .should('have.class', 'test-dummy-1')
      .should('have.class', 'test-dummy-2');
  });
  it('HTML classes & id & lang', () => {
    cy.get('html')
      // .should('have.attr', 'lang', 'en')
      .should('have.id', 'test-dummy')
      .should('have.class', 'test-dummy-1')
      .should('have.class', 'test-dummy-2');
  });
  it('JS enabled Class', () => {
    cy.get('html').should('have.class', 'js');
  });
  // it('Body slot nested element', () => {
  //   cy.get('main').should('contain', 'a');
  //   cy.get('main').should('contain', 'ul');
  // });
  // it('Head slot nested element', () => {
  //   cy.get('head').children().should('have.length.at.least', 4);
  // });
});
