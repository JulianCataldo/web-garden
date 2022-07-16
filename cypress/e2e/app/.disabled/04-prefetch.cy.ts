const asHuman = Cypress.env('AS_HUMAN') === true;

describe('App — <Prefetch>', () => {
  it('Open demo', () => {
    cy.visit('http://localhost:2424/');

    if (asHuman) cy.wait(600);
  });

  it('Hover [1 on 4] anchor link', () => {
    if (asHuman) cy.wait(1600);

    cy.get('[href="/"]').realHover();
    // cy.findByRole('navigation', { name: 'Global menu' })
    //   .findByRole('link', { name: 'Home' })
    //   .realHover();
  });
  // it('Hover [2 on 4] anchor link', () => {
  //   if (asHuman) cy.wait(600);
  //   cy.findByRole('navigation', { name: 'Global menu' })
  //     .findByRole('link', { name: 'Components' })
  //     .realHover();
  // });
  // it('Hover [3 on 4] anchor link', () => {
  //   if (asHuman) cy.wait(600);
  //   cy.findByRole('navigation', { name: 'Global menu' })
  //     .findByRole('link', { name: 'Tooling' })
  //     .realHover();
  // });
  // it('Hover [4 on 4] anchor link', () => {
  //   if (asHuman) cy.wait(600);
  //   cy.findByRole('link', { name: "Julian Cataldo' website" }).realHover();
  // });

  it('Check for [3 / 4] Link tags in HEAD', () => {
    cy.wait(500);
    cy.get('head link').should('have.length', 3);
    // console.log(cy.get('head link'));
  });
});
