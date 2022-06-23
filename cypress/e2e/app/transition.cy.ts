describe('App — <Transition>', () => {
  it('Open demo', () => {
    cy.visit('http://localhost:2424/');
  });

  it('Click link other page', () => {
    cy.wait(1200);
    cy.get('[href="/page-a"]').first().click();
  });

  it('Overlay class is toggled', () => {
    cy.wait(50);
    cy.url().should('eq', 'http://localhost:2424/');
    cy.get('#app-transition-overlay.is-visible');
  });
  it('Click link home', () => {
    cy.wait(2300);

    cy.get('#app-transition-overlay:not(.is-visible)');
    cy.get('[href="/"]').click();
  });
  it('Overlay class is toggled', () => {
    cy.wait(50);
    cy.url().should('eq', 'http://localhost:2424/page-a');
    cy.get('#app-transition-overlay.is-visible');
  });
});
