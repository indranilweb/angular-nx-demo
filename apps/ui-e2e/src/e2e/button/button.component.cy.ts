describe('ui', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=buttoncomponent--primary&args=text:CLICK ME;type:primary;icon;styleClass;'
    )
  );
  it('should render the component', () => {
    cy.get('ns-button').should('exist');
  });
  it('should change the button text', () => {
    cy.get('.primary-button').invoke('text', 'BUTTON TEXT').should('have.text', 'BUTTON TEXT');
  });
  it('should change the button icon', () => {
    cy.get('.primary-button').invoke('text', 'ADD TO CART').should('have.text', 'ADD TO CART');
    cy.get('.primary-button').invoke('addClass', 'bi bi-cart').should('have.class', 'bi bi-cart');
  });
});
