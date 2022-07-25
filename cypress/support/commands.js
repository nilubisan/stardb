// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
const ACCESS_TOKEN = 'ACCESS_TOKEN';
const REFRESH_TOKEN = 'REFRESH_TOKEN';

Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-cy="login-btn"]').click()
    cy.get('[data-cy="username-input"]').type(username);
    cy.get('[data-cy="password-input"]').type(password);
    cy.get('[data-cy="login-submit-button"]').click()

})

Cypress.Commands.add('logout', () => {
    cy.get('[data-cy="logout-btn"]').click().should(() => {
        expect(localStorage.getItem(ACCESS_TOKEN)).to.be.an('null');
        expect(localStorage.getItem(REFRESH_TOKEN)).to.be.an('null');
    })
})

Cypress.Commands.add('logout', () => {
    cy.get('[data-cy="logout-btn"]').click().should(() => {
        expect(localStorage.getItem(ACCESS_TOKEN)).to.be.an('null');
        expect(localStorage.getItem(REFRESH_TOKEN)).to.be.an('null');
    })
})

Cypress.Commands.add('checkIfTokensExists', () => {
    expect(localStorage.getItem('ACCESS_TOKEN')).to.be.an('string');
    expect(localStorage.getItem('REFRESH_TOKEN')).to.be.an('string');
});

// Cypress.Commands.add('checkIfTokens', () => {
//     expect(localStorage.getItem('ACCESS_TOKEN')).to.be.an('string');
//     expect(localStorage.getItem('REFRESH_TOKEN')).to.be.an('string');
// });


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })