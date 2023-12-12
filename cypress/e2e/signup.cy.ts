// signup.cy.ts
describe('Signup Test', () => {
  it('should successfully sign up a new user', () => {
    // Visit the signup page or navigate to the signup form
    cy.visit('http://localhost:4200/signup');

    // Fill in the signup form with valid data
    cy.get('#username').type('testUser');
    cy.get('#password').type('testPassword');
    cy.get('#firstname').type('John');
    cy.get('#lastname').type('Doe');
    cy.get('#email').type('test@example.com');

    // Submit the form
    cy.get('#signup-button').click();

    // Assert that the signup was successful
    cy.url().should('eq', 'http://localhost:4200/home');
  });

  it('should display an error for invalid signup data', () => {
    // Visit the signup page or navigate to the signup form
    cy.visit('http://localhost:4200/signup');

    // Fill in the signup form with invalid data
    cy.get('#username').type('testUser'); // invalid, username cannot be empty
    cy.get('#password').type('password123');
    cy.get('#firstname').type('Jane');
    cy.get('#lastname').type('Doe');
    cy.get('#email').type('invalid-email'); // invalid email format

    // Submit the form
    cy.get('#signup-button').click();

    // Assert that an error message is displayed
    cy.get('#error-message').should('be.visible');
  });
});
