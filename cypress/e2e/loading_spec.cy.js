// describe("template spec", () => {
//   it("Should display loading cards and image", () => {
//     cy.intercept(
//       "POST",
//       "https://garden-grow-be.herokuapp.com/api/v1/graphql",
//       (req) => {}
//     );
//     cy.visit("http://localhost:3000/results/80910");
//     cy.get(".sunflower-gif").should("be.visible");
//     cy.get(".loading-card").should("have.length", 6);
//   });
// });
