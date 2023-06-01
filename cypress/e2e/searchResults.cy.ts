// describe('Search Results', () => {
//    beforeEach(() => {
//     cy.visit('http://localhost:3000/');
//   });
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })


// describe('Search Results from form', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000/');
//   });
// })


describe('The Search Results Page', () => {
  it('successfully loads the main page first', () => {
    cy.visit('http://localhost:3000/') // change URL to match your dev URL
  })
})