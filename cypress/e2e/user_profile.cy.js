import { aliasQuery } from "../../src/Graphql/graphql-test-utils";

describe("Results for user profile page", () => {
  beforeEach(() => {
    cy.intercept("POST", "https://garden-grow-be.herokuapp.com/api/v1/graphql", (req) => {
        aliasQuery(req, "userDetails");
        req.reply({ fixture: "users.json" })
      }
    );
    cy.visit("http://localhost:3000/user/1");
    // cy.wait("@gqluserDetailsQuery");
  })

  it("Should display a user's details", () => {
    cy.get('.user-image-container').should('be.visible')
    // cy.get('.profile-name').should('be.visible').contains('Josephine')
    // cy.get('.aboutMe > p').should('be.visible')
    // cy.get('.linked-in').should('be.visible').contains('- Visit my LinkedIn Page')
    // cy.get('.github').should('be.visible').contains('- Checkout My Work on Github')
    // cy.get('.text > :nth-child(6)').should('be.visible').contains('jheidepriem@gmail.com')
  })

  it("Should display a user's garden", () => {
    // cy.get('.users-plants-container > h1').should('be.visible').contains('My Garden for GrowZone 9a')
  })

  it('Should display a link to go back to the main page', () => {
    // cy.get('.x-image-back-button').click()
    cy.url('http://localhost:3000')
  })
})

