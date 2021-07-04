/// <reference types="cypress" />

describe('Teamflow QA Engineer Take-Home', () => {
    it('Validate a trending section exists', () => {
        cy.visit(Cypress.env('giphy_homepage'))
        cy.get('div[class*="homepage__Container"] h3').contains('Trending').should('be.visible')
    })
    it('Validate search box works', () => {
        //cypress code
        cy.get('#searchbar').type('Heart')
        cy.get('div[class*="SearchBarDropDownContainer"]').should('be.visible')
        cy.get('#searchbar').type('{enter}')
        cy.url().should('eq', 'https://giphy.com/search/Heart')
        cy.get('#content h1').contains('Heart').should('be.visible')
        cy.get('div.giphy-grid a').should('have.length.greaterThan', 0)
    })
    it('Validate that when the user clicks trending section is redirected successfuly', () => {
        //cypress code
        cy.go('back')
        cy.url().should('eq', Cypress.env('giphy_homepage'))
        cy.get('div[class*="homepage__Container"] h3').contains('Trending').should('be.visible')
        cy.get('div[class*="ListWrapper"][height="140"] ul li:nth-child(2)').click()
        cy.url().should('include', '/gifs/')
    })
})
