import { aliasQuery } from "../../src/Graphql/graphql-test-utils";

describe("Results page with all plants", () => {
  beforeEach(() => {
    cy.intercept(
      "POST",
      "https://garden-grow-be.herokuapp.com/api/v1/graphql",
      (req) => {
        aliasQuery(req, "vegetablesByZipcode");
        req.reply({ fixture: "plants.json" });
      }
    );
    cy.visit("http://localhost:3000/results/80910");
    cy.wait("@gqlvegetablesByZipcodeQuery");
  });

  it("Should show the title with the appropiate search zipcode", () => {
    cy.get(".plants-title").contains("Your 80910 Fruits and Vegetables");
  });

  it("Should render logo and nav bar", () => {
    cy.get(".beet-logo").should("be.visible");
    cy.get(".hamburger").should("be.visible");
  });

  it("Should display all plants", () => {
    cy.get(".plant-card").should("have.length", 3);
  });

  it("toggles the navigation menu when the hamburger button is clicked", () => {
    cy.get(".navigationMenu").should("not.have.class", "expanded");
    cy.get(".hamburger").click();
    cy.get(".navigationMenu").should("have.class", "expanded");
    cy.get(".hamburger").click();
    cy.get(".navigationMenu").should("not.have.class", "expanded");
  });

    it("shows the dropdown menu when the user profile button is clicked", () => {
      cy.get(".dropdown").should("not.have.class", "active");
      cy.contains("Gardener Profiles").click({ force: true });
      cy.get(".dropdown").should("have.class", "active");
      cy.contains("Rae").click({ force: true });
      cy.url().should("include", "/7");
    });
  
    it("should open and close user profiles when clicked", () => {
      cy.get("nav")
        .should("not.have.class", "expanded")
        .find(".hamburger")
        .click()
        .get("nav > div")
        .should("have.class", "expanded")
        .get(".profile")
        .click()
        .get("datalist")
        .should("contain", "Rae")
        .get(".profile")
        .click()
        .get("datalist")
        .should("not.have.class", "active");
    });
  it("Should display a title and button on each card", () => {
    cy.get(".card-image").first().should("be.visible");
    cy.get(".card-title").first().contains("Arugula");
    cy.get('.plants-display-grid > :nth-child(1) > button').first().contains("+ to my garden");
  });

  it("Should navigate to details page on click on plant card", () => {
    cy.intercept(
      "POST",
      "https://garden-grow-be.herokuapp.com/api/v1/graphql",
      (req) => {
        aliasQuery(req, "vegetableDetails");
        req.reply({ fixture: "plant.json" });
      }
    );
    cy.get(".plant-card").first().click();
    cy.url("http://localhost:3000/vegetable/6a/1");
    cy.wait("@gqlvegetableDetailsQuery");
  });
});