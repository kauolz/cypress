/// <reference types="cypress" />

//Left menu
const logo = '[alt="Mercury Tours"]'
const homeLink = 'Home'
const flightsLink = 'Flights'
const hotelsLink = 'Hotels'
const carRentalsLink = 'Car Rental'
const cruisesLink = 'Cruises'
const destinationsLink = 'Destinations'
const vacationsLink = 'Vacations'
//Header
const singOnTopMenu = 'SIGN-ON'
const regiserTopMenu = 'REGISTER'
const supportTopMenu = 'SUPPORT'
const contactTopMenu = 'CONTACT'
// Footer
const footer = '.footer'


export function checkNavigation() {
        cy.visit('http://newtours.demoaut.com/mercurywelcome.php')
        cy.get(logo).should('be.visible')
        checkHeader()
        checkFooter()
        checkLeftMenu()
}

export function checkHeader(){
    cy.contains(singOnTopMenu).should('be.visible')
    cy.contains(regiserTopMenu).should('be.visible')
    cy.contains(supportTopMenu).should('be.visible')
    cy.contains(contactTopMenu).should('be.visible')
}

export function checkLeftMenu(){
    cy.contains(homeLink).should('be.visible')
    cy.contains(flightsLink).should('be.visible')
    cy.contains(hotelsLink).should('be.visible')
    cy.contains(carRentalsLink).should('be.visible')
    cy.contains(cruisesLink).should('be.visible')
    cy.contains(destinationsLink).should('be.visible')
    cy.contains(vacationsLink).should('be.visible')
}

export function checkFooter(){
    cy.get(footer).should('be.visible')
}

export function openPage(pageToOpen){
    cy.contains(pageToOpen).click()
    cy.get(logo).should('be.visible')
    checkHeader()
    checkFooter()
    checkLeftMenu()
}