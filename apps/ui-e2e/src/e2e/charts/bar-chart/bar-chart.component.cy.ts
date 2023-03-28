describe('ui', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=barchartcomponent--primary&args=data;xAxisLabel;yAxisLabel;'
    )
  );
  it('should render the component', () => {
    cy.get('ns-bar-chart').should('exist');
  });
});
