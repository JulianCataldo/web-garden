import { highlight } from 'cypress-highlight';

describe('App — <ScrollObserver>', () => {
  const asHuman = Cypress.env('AS_HUMAN') === true;
  // console.log(asHuman ? 'As human' : 'As robot');

  it('Open demo', () => {
    cy.visit('http://localhost:2424/');

    highlight('[data-test*=scrollObserver]');
  });

  it('Base state', () => {
    if (asHuman) cy.wait(600);
    cy.get('[data-test*=scrollObserver-rootDoc]')
      .should('have.attr', 'data-has-scroll', 'true')
      .should('have.attr', 'data-is-scrolling-up', 'false')
      .should('have.attr', 'data-is-bottom', 'false')
      .should('have.attr', 'data-is-top', 'true');
  });

  it('Scroll to middle', () => {
    if (asHuman) cy.wait(600);
    cy.scrollTo(0, 1500);

    if (asHuman) cy.wait(600);
    cy.get('[data-test*=scrollObserver-rootDoc]')
      .should('have.attr', 'data-is-scrolling-up', 'false')
      .should('have.attr', 'data-is-bottom', 'false')
      .should('have.attr', 'data-is-top', 'false');
  });

  it('Scroll to bottom', () => {
    if (asHuman) cy.wait(600);
    cy.scrollTo('bottom');

    if (asHuman) cy.wait(600);
    cy.get('[data-test*=scrollObserver-rootDoc]')
      .should('have.attr', 'data-is-scrolling-up', 'false')
      .should('have.attr', 'data-is-bottom', 'true')
      .should('have.attr', 'data-is-top', 'false');
  });

  it('Scroll to top', () => {
    if (asHuman) cy.wait(600);
    cy.scrollTo(0, 3500);

    if (asHuman) cy.wait(1500);
    cy.scrollTo('top');

    if (asHuman) cy.wait(600);
    cy.get('[data-test*=scrollObserver-rootDoc]')
      .should('have.attr', 'data-is-scrolling-up', 'true')
      .should('have.attr', 'data-is-bottom', 'false')
      .should('have.attr', 'data-is-top', 'true');
  });
});
