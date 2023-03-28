import { getGreeting } from '../support/app.po';

describe('neo-store', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the home page', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    // getGreeting().contains('Welcome neo-store');
    cy.url().should('include', '/home');
    cy.get('div').contains('EPIC NEW COLLECTION');
    cy.get('ns-button').contains('CHECK THEM OUT');
    cy.get('div').contains('TRENDING NOW');
  });

  it('should visit products page when "Check Them Out" button is clicked', () => {
    cy.get('ns-button').contains('CHECK THEM OUT');
    cy.get('ns-button').contains('CHECK THEM OUT').click();
    cy.url().should('include', '/products');
  });

  it('should visit products page when "Browse All Prducts" button is clicked', () => {
    cy.get('ns-button').contains('BROWSE ALL PRODUCTS');
    cy.get('.all-products > button').click();
    cy.url().should('include', '/products');
  });
});
