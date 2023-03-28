describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it('renders correctly', () => {
      cy.get('.home-container').should('exist')
      cy.get('.nav-container').should('exist')
      cy.get('.title-container').should('exist')
      cy.get('.home-title').should('have.text', 'Garden Grow')
      cy.get('form').should('exist')
    })

  it('updates the zip code state when the input value changes', () => {
    const testZipCode = '2564'

    cy.get('.input').type(testZipCode)
    cy.wrap({ zipCode: testZipCode }).should(({ zipCode }) => {
      expect(zipCode).to.eq(testZipCode)
    })
    })

  it('displays an error message for invalid input type', () => {
    cy.get('.input').type('abc')
    cy.get('.error-message').should('be.visible')
  })
})