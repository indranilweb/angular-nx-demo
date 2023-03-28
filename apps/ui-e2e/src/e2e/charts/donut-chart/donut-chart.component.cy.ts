describe('ui', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=donutchartcomponent--primary&args=data;')
  );
  it('should render the component', () => {
    cy.get('ns-donut-chart').should('exist');
  });
});
