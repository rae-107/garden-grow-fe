import { aliasQuery } from "../../src/Graphql/graphql-test-utils";

describe("Results for single vegetable page", () => {
  beforeEach(() => {
    cy.intercept("POST", "https://garden-grow-be.herokuapp.com/api/v1/graphql", (req) => {
        aliasQuery(req, "vegetableDetails");
        req.reply({ fixture: "plant.json" })
      }
    );
    cy.visit("http://localhost:3000/vegetable/9a/1");
    cy.wait("@gqlvegetableDetailsQuery");
  })

  it("should display all plant details on plant page", () => {
    cy.visit('http://localhost:3000/vegetable/9a/2')
    cy.get('.plant-title').should('be.visible').contains('Beets')
    cy.get('.large-plant-img').should('be.visible')
    cy.get('.planting-care-title').should('be.visible').contains('Planting Guide for: 9a')
    cy.get('.sun-duration').should('be.visible').contains('Sun: Full Sun')
    cy.get('.weekly-water').should('be.visible').contains('1 inch')
    cy.get('.row-spacing').should('be.visible').contains('4-6 inches')
    cy.get('.seed-spacing').should('be.visible').contains('2-4 inches')
    cy.get('.outdoor-seed').should('be.visible').contains('February 15 to March 8')
    cy.get('.harvest-time').should('be.visible').contains('Harvest Time: 55-70 days')
    cy.get('.plant-description').should('be.visible').contains('Beets, Beta vulgaris, are herbacious biennial root vegetables in the family Chenopodiaceae grown for their edible root. The plant is usually erect with a long main root and a rosette of leaves growing on stems. The leaves are oval in shape, arranged alternately on the stem and grow 20–40 cm (7.9–15.7 in) in length. The roots are usually red in color. The plant produces sessile green flowers and can reach 1–2 m (3.3–6.6 ft) in height. Beets are usually grown as annual plants, harvested after one growing season. Beets may also be referred to as beetroot, garden beet or spinach beet and originated from the Mediterranean.')
  })

  it('should go back to plant library on click of X', () => {
    cy.visit('http://localhost:3000/vegetable/9a/2')
    cy.get('.x-image-button').click()
    cy.url('http//localhost:3000/zipcode')
  })
})