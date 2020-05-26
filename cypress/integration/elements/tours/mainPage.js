/// <reference types="cypress" />

const featuredDestinationBlock = 'td:nth-child(2) p img'
const specialsBlock = '[alt="Specials"]'
const tourTipsBlock = '[alt="Tour Tips"]'
const findFightBlock = '[alt="Find a Flight"]'
const desinationsBlock = '[alt="Desinations"]'
const vacationsBlock = '[alt="vacations"]'
const registerBlock = '[alt="Register"]'
const linksBlock = '[alt="Links"]'

export function checkMainPageOpened() {
        cy.visit('http://newtours.demoaut.com/mercurywelcome.php')
        cy.get(featuredDestinationBlock).should('be.visible')
        // cy.contains(featuredDestinationBlock)
        cy.get(specialsBlock).should('be.visible')
        cy.get(tourTipsBlock).should('be.visible')
        cy.get(findFightBlock).should('be.visible')
        cy.get(desinationsBlock).should('be.visible')
        cy.get(vacationsBlock).should('be.visible')
        cy.get(registerBlock).should('be.visible')
        cy.get(linksBlock).should('be.visible')
        // cy.contains(fakeTopMenu).should('be.visible')
}
