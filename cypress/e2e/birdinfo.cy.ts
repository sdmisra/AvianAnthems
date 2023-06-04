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

  it('should show more information about the chosen bird, Eastern Bluebird', () => {
    cy.get('h3')
    .contains('Eastern Bluebird')
    cy.get('p').contains('male')
    cy.get('p').contains("flight call")
    cy.get('p').contains("adult")
    .contains("United States")
    .contains("Avon Park Air Force Range, Avon Park, Polk County, Florida")
    .contains("Patrick J. Blake")
    .contains("2022-03-27")
  })

})
