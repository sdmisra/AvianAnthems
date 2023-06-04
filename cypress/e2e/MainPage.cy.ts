describe('Main Page Spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display the header', () => {
    cy.get('.header').should('be.visible');
  });

  it('should display the info container', () => {
    cy.get('.info-container').should('be.visible');
  });

  it('should display the dropdown menu', () => {
    cy.get('.dropdown-menu').should('exist');
  });

  it('should contain "Country:" in the dropdown menu', () => {
    cy.get('.dropdown-menu').contains('Country:');
  });

  it('should click the second item in the dropdown menu', () => {
    cy.get('.dropdown-menu > :nth-child(2)').click();
  });
  
  it('should contain a button on the form', () => {
    cy.get('.dropdown-menu button').should('exist');
  });

  it('should scroll to the footer', () => {
    cy.get('footer').scrollIntoView();
  });

  it('should display the "about us" section in the footer', () => {
    cy.get('.about-us').should('be.visible');
  });

  it('should contain "Carol Bradsen" in the third child of the about us section', () => {
    cy.get(':nth-child(3) > h4').contains('Carol Bradsen');
  });

  it('should have the correct GitHub link for Cade Chaney', () => {
    cy.get('[href="https://github.com/cadechaney"]').should('have.attr', 'href');
  });

  it('should contain the "Linkedin" link for Shane Misra', () => {
    cy.get('[href="https://www.linkedin.com/in/shanemisra/"]').contains('Linkedin');
  });

});