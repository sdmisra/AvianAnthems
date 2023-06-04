describe('Detailed Bird Info', () => {
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
    cy.get('p').contains("United States")
    cy.get('p').contains("Avon Park Air Force Range, Avon Park, Polk County, Florida")
    cy.get('p').contains("Patrick J. Blake")
    cy.get('p').contains("2022-03-27")
    cy.get('.remark').contains("Male eastern bluebird performing flight song")
  })

  it('should show audio files about chosen bird', () => {
    cy.get('.bird-info-audio')
    cy.get('.osci-image')
  })

  it('should have a way to navigate back to the main page', () => {
    cy.get('.nest-image').click()
    cy.url().should('include', 'http://localhost:3000')
  })

  it('should have an error message if and error occurs and offer the user a way out/ a way to keep interacting with app', () => {
    cy.visit('http://localhost:3000/info/checkerror')
    cy.get('.error-text').contains("An error has occured. Click our corner nest to fly back home!")
  })  
})