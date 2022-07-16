describe('App — <Tooltips>', () => {
  it('Open demo', () => {
    cy.visit('http://localhost:2424/');
  });

  it('Hover link', () => {
    cy.get('[href="/tooling"]').first().realHover();
  });

  it('Check for Tippy existence and correct placement', () => {
    cy.get('[data-tippy-root]')
      .should('have.attr', 'style')
      .then((style) => {
        expect(style.includes('translate(-')).to.be.true;
      });
  });
});
