import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
})


// cy.get() will automatically retry until the element(s) exist in the DOM
// cy.get() will automatically retry until all chained assertions have passed

Then('I should see {string} related pages', (string) => {
    cy.get('[name=q]').should('include.value', string)
})