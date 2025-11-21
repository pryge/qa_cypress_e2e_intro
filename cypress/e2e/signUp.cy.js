/// <reference types="cypress" />
const { generateUser } = require('../support/generateUser');

Cypress.on('uncaught:exception', () => false);

describe('Sign Up spec', () => {
  it('should provide an ability to sign up', () => {
    cy.visit('https://react-redux.realworld.io/#/register', {});

    const { username, email, password } = generateUser();

    cy.get('[placeholder="Username"]').type(username);
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);

    cy.get('button[type="submit"]').click();
  });
});
