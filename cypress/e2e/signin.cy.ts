// signin.cy.ts
describe('Signin Test', () => {
  it('should successfully sign in with valid credentials', () => {
    // Visit the signin page or navigate to the signin form
    cy.visit('http://localhost:4200/signin');

    // Fill in the signin form with valid credentials
    cy.get('#username').type('testUser');
    cy.get('#password').type('testPassword');

    // Submit the form
    cy.get('#signin-button').click();

    // Assert that the signin was successful
    cy.url().should('eq', 'http://localhost:4200/home');
  });

  it('should display an error for invalid credentials', () => {
    // Visit the signin page or navigate to the signin form
    cy.visit('http://localhost:4200/signin');

    // Fill in the signin form with invalid credentials
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPassword');

    // Submit the form
    cy.get('#signin-button').click();

    // Assert that an error message is displayed
    //cy.get('#error-message').should('be.visible');
  });
});
