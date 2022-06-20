describe('App — <ScrollObserver>', () => {
  it('Open demo', () => {
    cy.visit('http://localhost:2424/');
  });

  it('Base state', () => {
    cy.get('body')
      .should('have.attr', 'data-has-scroll', 'true')
      .should('have.attr', 'data-is-scrolling-up', 'false')
      .should('have.attr', 'data-is-bottom', 'false')
      .should('have.attr', 'data-is-top', 'true');
  });

  it('Scroll to middle', () => {
    cy.scrollTo(0, 500);
    cy.get('body')
      .should('have.attr', 'data-is-scrolling-up', 'false')
      .should('have.attr', 'data-is-bottom', 'false')
      .should('have.attr', 'data-is-top', 'false');
  });
  it('Scroll to bottom', () => {
    cy.scrollTo('bottom');
    cy.get('body')
      .should('have.attr', 'data-is-scrolling-up', 'false')
      .should('have.attr', 'data-is-bottom', 'true')
      .should('have.attr', 'data-is-top', 'false');
  });
  it('Scroll to top', () => {
    cy.scrollTo('top');
    cy.get('body')
      .should('have.attr', 'data-is-scrolling-up', 'true')
      .should('have.attr', 'data-is-bottom', 'false')
      .should('have.attr', 'data-is-top', 'true');
  });
});
