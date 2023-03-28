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

  it('Should be able to add text to input field', () => {
    cy.get('.input').type(80910)
    cy.get('.input').should('have.value', 80910)
  })

  it('Should show each plant', () => {
    cy.get('.plant-card').should('be.visible')
  })


})