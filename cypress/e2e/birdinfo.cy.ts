describe('Search Results', () => {
   beforeEach(() => {

    cy.intercept('GET', 'https://xeno-canto.org/api/2/**', { fixture: 'mock-data' }); 

    cy.visit('http://localhost:3000');
    cy.get('.country').select("United States")
    cy.get('.song-type').select("flight-call")
    cy.get('[data-cy="search"]').click()
    cy.get('.card-header')
    cy.contains('Eastern Bluebird')
    cy.get('button').click() 
    cy.url().should('include', '/info/712412')
    
    
  });

 

})
