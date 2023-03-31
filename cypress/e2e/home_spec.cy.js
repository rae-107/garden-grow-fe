describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it('renders correctly', () => {
      cy.get('.home-container').should('exist')
      cy.get('.nav-container').should('exist')
      cy.get(".logoLink").should("exist")
      cy.get('.title-container').should('exist')
      cy.get('.home-title').should('have.text', 'Garden Grow')
      cy.get('form').should('exist')

    })

  it("should open and close Nav bar when clicked", () => {
    cy
    .get("nav").should("not.have.class", "expanded")
    .find(".hamburger")
    .click()
    .get("nav > div").should("have.class", "expanded")
    .get("nav > div").should("contain", "USER Profiles")
    .get("nav > div").should("contain", "My Garden")
    .get("nav")
    .find(".hamburger")
    .click()
    .get("nav").should("not.have.class", "expanded")
  })

  it("should open and close user profiles when clicked", () => {
    cy
    .get("nav").should("not.have.class", "expanded")
    .find(".hamburger")
    .click()
    .get("nav > div").should("have.class", "expanded")
    .get(".profile")
    .click()
    .get("datalist").should("contain", "Rae")
    .get(".profile")
    .click()
    .get("datalist").should("not.have.class", "active")  
  })

  it('updates the zip code state when the input value changes', () => {
    const testZipCode = '2564'

    cy.get('.input').type(testZipCode)
    cy.wrap({ zipCode: testZipCode }).should(({ zipCode }) => {
      expect(zipCode).to.eq(testZipCode)
    })
    })

  it('displays an error message for invalid input type', () => {
    cy.get('.input').type('822')
    cy.get('.form-button').click()
    cy.get('.errorMessage').should('contain', 'please enter a valid zipcode')
  })
})