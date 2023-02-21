import { Given, When } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
    cy.visit(url)
})

When('I search for {string}', (searchTerm) => {
    cy.get('[name=q]')
        .type(searchTerm)
        .type('{enter}')
})