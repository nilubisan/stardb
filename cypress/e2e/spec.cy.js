describe("My first test", () => {
  it('Checks if there is a form with username and password inputs', () => {
    cy.visit("http://localhost:3001/")
    cy.get('[data-cy="login-btn"]').click()
    cy.get('[data-cy="login-form"]').within(() => {
      cy.get('[data-cy="username-input"]').should('have.attr', 'type', 'text')
      cy.get('[data-cy="password-input"]').should('have.attr', 'type', 'password')
    })
  })
})