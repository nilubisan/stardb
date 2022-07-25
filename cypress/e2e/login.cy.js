import {getMessageOnInvalidInputData} from '../../src/utils/loginUtils';
const ACCESS_TOKEN = 'ACCESS_TOKEN';
const REFRESH_TOKEN = 'REFRESH_TOKEN';
const HOME_PAGE_URL = 'http://localhost:3000/';

describe("Login page test suites", () => {
  it('Clicking "login" button navigates to sign-in form', function(){
    cy.visit(HOME_PAGE_URL)
    cy.get('[data-cy="login-btn"]').click()
    cy.get('[data-cy="login-form"]')
  })
  it('Form input fields have special type attributes', function(){
    cy.visit(HOME_PAGE_URL)
    cy.get('[data-cy="login-btn"]').click()
    cy.get('[data-cy="username-input"]')
      .should('have.attr', 'type', 'text')
    cy.get('[data-cy="password-input"]')
      .should('have.attr', 'type', 'password')
  })
  it('Username value length is validated before sending to server', function(){
    cy.visit(HOME_PAGE_URL)
    cy.login("De", "5566Developer")
    cy.get('.login__error-message')
    .should('have.text', getMessageOnInvalidInputData());
  });
  it('Password value length is validated before sending to server', () => {
    cy.visit(HOME_PAGE_URL)
    cy.login("Developer", "5566D")
    cy.get('.login__error-message')
    .contains(getMessageOnInvalidInputData());
  });
  it('Password value is validated by regexp before sending to server', () => {
    cy.wrap(["1234567", "654321D", "psw789654"]).each((password) => {
      cy.visit(HOME_PAGE_URL);
      cy.login("Developer", password);
      cy.get('.login__error-message')
      .contains(getMessageOnInvalidInputData());
    })
  });
  it('User is redirected to main page after passing correct credentials', () => {
    cy.visit(HOME_PAGE_URL)
    cy.fixture('credentials.json').then((data) => {
      cy.login(data["username"], data["password"])
    })
    cy.get('[data-cy="logout-btn"]')
    cy.get('[data-cy="login-form"]').should('not.exist')
  })
  it('Access and refresh tokens have been passed to window.localStorage after signing in', () => {
    cy.logout();
    cy.fixture('credentials.json').then((data) => {
      cy.login(data["username"], data["password"])
    });
  });
})