describe('App — <Prefetch>', () => {
  it('Open demo', () => {
    cy.visit('http://localhost:3000/');
  });

  it('Check for 3 on 4 Link tags', () => {
    cy.get('.link-card:nth-of-type(1) a').realHover();
    cy.get('.link-card:nth-of-type(2) a').realHover();
    cy.get('.link-card:nth-of-type(3) a').realHover();
    cy.get('.link-card:nth-of-type(4) a').realHover();

    cy.get('head link').should('have.length', 3);
  });
});
