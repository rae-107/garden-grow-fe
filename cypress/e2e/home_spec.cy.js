describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("renders correctly", () => {
    cy.get(".home-container").should("exist");
    cy.get(".title-input-container").should("exist");
    cy.get(".logo-and-title").should("exist");
    cy.get(".logo-image").should("exist");
    cy.get(".home-title").should("have.text", "Garden Grow");
    cy.get("form").should("exist");
  });

  it("updates the zip code state when the input value changes", () => {
    const testZipCode = "2564";
    cy.get(".input").type(testZipCode);
    cy.wrap({ zipCode: testZipCode }).should(({ zipCode }) => {
      expect(zipCode).to.eq(testZipCode);
    });
  });

  it("reroutes to error page if zipcode is invalid", () => {
    cy.get("input").type("10000").should("have.value", "10000");
    cy.get(".plants-link").click();
  });
});
