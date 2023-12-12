describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/recipes')
    cy.get('#post-button').click()
    cy.url().should('eq', 'http://localhost:4200/signin')
    // Fill in the signin form with valid credentials
    cy.get('#username').type('testUser');
    cy.get('#password').type('testPassword');

    // Submit the form
    cy.get('#signin-button').click();

    cy.visit('http://localhost:4200/recipes')
    cy.get('#post-button').click()
  })
})