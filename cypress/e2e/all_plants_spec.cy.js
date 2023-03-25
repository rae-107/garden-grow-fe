describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('This is a failing test to test CI', () => {
    cy.visit('http://localhost:3000/')
    cy.get('doesNotExist')
  })
})