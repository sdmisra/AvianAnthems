describe('Search Results', () => {
   beforeEach(() => {

    cy.intercept('GET', 'https://xeno-canto.org/api/2/**', { fixture: 'mock-data' }); 

    cy.visit('http://localhost:3000');
    cy.get('.country').select("United States")
    cy.get('.song-type').select("flight-call")
    cy.get('[data-cy="search"]').click()
  });

  it('should show a page of search results based on the user inputs', () => {
    cy.get('.results-page').contains("Search Results")
  })

  it('should show the correct number of result cards', () => {
    cy.get('.result-card').should('have.length', 1)
  })

  it('should show the headline of Eastern Bluebird', () => {
    cy.get('.card-header')
    .contains('Eastern Bluebird')
  })

  it('should have the location country of United States', () => {
    cy.get('.result-card > :nth-child(1)')
    .contains("United States")
  })

  it('should have a type call of flight call', () => {
    cy.get('.details > :nth-child(3)')
      .contains("flight")
  })

  it('should have an audio component that plays the recording of the Eastern Bluebird', () => {
    cy.get('.card-controls')
  })

  it('should take the user to a detailed page about that bird and recording when the Learn More button is pressed', () => {
    cy.get('button').click() 
    cy.url().should('include', '/info/712412')
      .get('h3').contains('Eastern Bluebird')
  })

})

