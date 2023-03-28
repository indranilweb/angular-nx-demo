describe('ui', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=headercomponent--primary&args=menu;styleClass:bg-black;'
    )
  );
  it('should render the component', () => {
    cy.get('ns-header').should('exist');
  });
  it('should set the header menu', () => {
    const menu: any[] = [
      {
        label: 'HOME',
        link: '/home'
      },
      {
        label: 'SHOP',
        link: '/products'
      },
      {
        label: 'ABOUT',
        link: '/#'
      },
      {
        label: 'CONTACT',
        link: '/#'
      }
    ]
    cy.get('ns-header').invoke('menu', menu);
  });
});