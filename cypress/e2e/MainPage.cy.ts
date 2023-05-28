
describe('Main Page Spec', () => {
  it('should display the main page', () => {
    cy.visit('http://localhost:3000/'); 
    cy.get('.header').should('be.visible');
    cy.get('.info-container').should('be.visible');
    cy.get('footer').scrollIntoView();
    cy.get('.about-us').should('be.visible');
    cy.get(':nth-child(3) > h4').contains('Carol Bradsen')
    cy.get('[href="https://github.com/cadechaney"]').should('have.attr', 'href' )
    cy.get('[href="https://www.linkedin.com/in/shanemisra/"]').contains('Linkedin')

  });
});