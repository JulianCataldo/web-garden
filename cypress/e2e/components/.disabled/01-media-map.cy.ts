describe('Component — <MediaMap>', () => {
  it('Open demo', () => {
    cy.visit('http://localhost:2424/');
  });

  it('Leaflet is loaded', () => {
    cy.get('#map').should('have.class', 'leaflet-container');
  });
  it('Map size is correct', () => {
    cy.get('#map').invoke('outerWidth').should('be.above', 420);
    cy.get('#map').invoke('outerHeight').should('be.above', 420);
    cy.get('#map .leaflet-control-container')
      .invoke('outerWidth')
      .should('be.above', 420);
  });
});
