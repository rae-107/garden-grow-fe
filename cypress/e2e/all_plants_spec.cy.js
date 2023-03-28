describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/zipcode")
  })

  it('Should show the title with the appropiate search zipcode', () => {
    cy.get('.plants-title').contains('Fruits and Vegetables')
  })

  it('Should display input', () => {
    cy.get('.input').should('be.visible')
  })


})