///<reference types = "Cypress"/>

describe('empty spec', () => {

  it('test1', () => {

    cy.visit('http://localhost:3000/HotelSearchProject/')

    cy.url().should('eq', 'http://localhost:3000/HotelSearchProject/')

  })



 it('navigate to hotels', () => {

    cy.visit('http://localhost:3000/HotelSearchProject/')

    cy.get('[data-cy="Hotels"]').should("be.visible")
    cy.get('[data-cy="Car"]').should("be.visible")
    cy.get('[data-cy="Flight"]').should("be.visible")
    cy.get('.checkbox-row > .m-r-45').should("be.visible")
    cy.get('.checkbox-row > :nth-child(2)').should("be.visible")
  })

  it('Verifies Address/Going to box', () => {
    cy.visit('http://localhost:3000/HotelSearchProject/')
    cy.get('#tab1 > form > :nth-child(1) > .input--style-1').should('exist').should('have.value', '');
  })
  it('Verifies Check-in box', () => {
    cy.visit('http://localhost:3000/HotelSearchProject/')
    cy.get('#input-start').should('exist').should('have.value', '');
  })
  it('Verifies Check-out box', () => {
    cy.visit('http://localhost:3000/HotelSearchProject/')
    cy.get('#tab1 > form > .row > :nth-child(2) > .input-group').should('exist').should('have.value', '');
  });

  it('Verifies Travelers list', () => {
    cy.visit('http://localhost:3000/HotelSearchProject/')
    cy.get('#tab1 > form > :nth-child(3)').should('exist').should('have.value', '');
  });

  it('Verifies Add a Flight checkbox', () => {
    cy.visit('http://localhost:3000/HotelSearchProject/')
    cy.get('.checkbox-row > .m-r-45').should('exist').should('have.value', '');
  });

  it('Verifies Add a Car checkbox', () => {
    cy.visit('http://localhost:3000/HotelSearchProject/')
    cy.get('.checkbox-row > :nth-child(2)').should('exist').should('have.value', '');
  });

  it('Verifies Search Button', () => {
    cy.visit('http://localhost:3000/HotelSearchProject/')
    cy.get('#tab1 > form > .btn-submit').should('exist').should('have.value', '');
  });
});