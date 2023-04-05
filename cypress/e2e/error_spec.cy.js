describe('Error page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/abc')
  })

  it('Should display an image', () => {
    cy.get('.error-image').should('be.visible')
  })

  it('Should display an error message explaining that the page could not be found', () => {
    cy.get('.error-component-message').contains("404... Oh no!")
    cy.get('.error-component-message').contains("Looks like this page got lost in the garden.")
    cy.get('.error-component-message').contains("Let's find you something else to grow!")  
  })

  it('Should allow a user to return to the home page', () => {
    cy.get('.x-button').click()
    cy.url('http://localhost:3000/')
  })
})