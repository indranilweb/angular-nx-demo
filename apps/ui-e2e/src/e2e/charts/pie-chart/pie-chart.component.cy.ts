describe('ui', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=piechartcomponent--primary&args=data;')
  );
  it('should render the component', () => {
    cy.get('ns-pie-chart').should('exist');
  });
});
