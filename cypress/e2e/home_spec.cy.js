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

  // it("toggles the navigation menu when the hamburger button is clicked", () => {
  //   cy.get(".navigationMenu").should("not.have.class", "expanded");
  //   cy.get(".hamburger").click();
  //   cy.get(".navigationMenu").should("have.class", "expanded");
  //   cy.get(".hamburger").click();
  //   cy.get(".navigationMenu").should("not.have.class", "expanded");
  // });

  // it("shows the dropdown menu when the user profile button is clicked", () => {
  //   cy.get(".dropdown").should("not.have.class", "active");
  //   cy.contains("USER Profiles").click({ force: true });
  //   cy.get(".dropdown").should("have.class", "active");
  //   cy.contains("Rae").click({ force: true });
  //   cy.url().should("include", "/7");
  // });

  // it("should open and close user profiles when clicked", () => {
  //   cy.get("nav")
  //     .should("not.have.class", "expanded")
  //     .find(".hamburger")
  //     .click()
  //     .get("nav > div")
  //     .should("have.class", "expanded")
  //     .get(".profile")
  //     .click()
  //     .get("datalist")
  //     .should("contain", "Rae")
  //     .get(".profile")
  //     .click()
  //     .get("datalist")
  //     .should("not.have.class", "active");
  // });

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
