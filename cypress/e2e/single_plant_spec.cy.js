import { aliasQuery } from "../../src/Graphql/graphql-test-utils";

describe("Results for single vegetable page", () => {
  beforeEach(() => {
    cy.intercept(
      "POST",
      "https://garden-grow-be.herokuapp.com/api/v1/graphql",
      (req) => {
        aliasQuery(req, "vegetableDetails");
        req.reply({ fixture: "plant.json" });
      }
    );
    cy.visit("http://localhost:3000/vegetable/9a/1");
    cy.wait("@gqlvegetableDetailsQuery");
  });

  it("should display all plant details on plant page", () => {
    cy.get(".plant-title").should("be.visible").contains("Arugula");
    cy.get(".large-plant-img").should("be.visible");
    cy.get(".planting-care-title")
      .should("be.visible")
      .contains("Planting Guide for: 9a");
    cy.get(".sun-duration")
      .should("be.visible")
      .contains("Sun: 6-8 hours of sun");
    cy.get(".weekly-water")
      .should("be.visible")
      .contains("Weekly Water: 3 inches");
    cy.get(".row-spacing")
      .should("be.visible")
      .contains("Row Spacing: 6 inches");
    cy.get(".seed-spacing")
      .should("be.visible")
      .contains("Seed Spacing: 6 inches");
    cy.get(".outdoor-seed")
      .should("be.visible")
      .contains("Outdoor Seed Start Dates: April 25 to May 9");
    cy.get(".harvest-time")
      .should("be.visible")
      .contains("Harvest Time: 20-50 days");
    cy.get(".plant-description")
      .should("be.visible")
      .contains(
        "Arugula, Eruca sativa, is a leafy annual vegetable in the family Brassicaceae which is grown as a salad green. The arugula plant possesses a rosette of basal leaves which grow low to the ground. The leaves of the plant are deeply lobed and dull green in color. The plant produces clusters of white or light yellow flowers which will develop into a seeded fruit. Arugula will reach maturity after 45–60 days and can reach a height of 20–100 cm (7.9–39.4 in). Arugula may also be referred to as rocket, roquette, rucola, or rugula and originates from the Mediterranean regions of Morocco and Portugal."
      );
  });

  // it("should go back to plant library on click of X", () => {
  //   cy.get(".x-image-button").click();
  //   cy.url("http://localhost:3000/results/77004");
  // });
});
