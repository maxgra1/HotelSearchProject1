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

  

})