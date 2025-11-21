/// <reference types="cypress" />

const { generateUser } = require('../support/generateUser');

describe('Sign In page', () => {
  it('should visit login in page', () => {
    cy.visit('/#/Login');

    const { email, password } = generateUser();

    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);

    cy.get('button[type="submit"]').click();
  });
});
