/// <reference types="cypress" />

import {userData} from '../../../fixtures/userData.json'

const registerText = "To create your account, we'll need some basic information about you."
const contactInformationHeader = 'Contact Information'
const mailingInformationHeader = 'Mailing Information'
const userInformationHeader = 'User Information'

const firstName = '[name="firstName"]'
const lastName = '[name="lastName"]'
const phone = '[name="phone"]'
const email = '[name="userName"]'
const address1 = '[name="address1"]'
const address2 = '[name="address2"]'
const city = '[name="city"]'
const state = '[name="state"]'
const postalCode = '[name="postalCode"]'
const country = '[name="country"]'
const userName = '[name="email"]'
const password = '[name="password"]'
const confirmPassword = '[name="confirmPassword"]'
const submitButton = '[name="register"]'
// After registration
const singInLink = '[href="mercurysignon.php"]'


export function checkRegisterPageOpened(){
    cy.contains(registerText)
    cy.get(firstName).should('be.visible')
    cy.get(lastName).should('be.visible')
    cy.get(phone).should('be.visible')
    cy.get(email).should('be.visible')
    cy.get(address1).should('be.visible')
    cy.get(address2).should('be.visible')
    cy.get(city).should('be.visible')
    cy.get(state).should('be.visible')
    cy.get(postalCode).should('be.visible')
    cy.get(country).should('be.visible')
    cy.get(userName).should('be.visible')
    cy.get(password).should('be.visible')
    cy.get(confirmPassword).should('be.visible')
    cy.get(submitButton).should('be.visible')
}

export function registerNewUser(){
    checkRegisterPageOpened()
    fillNewUserData()
    cy.get(submitButton).click()

    cy.get(singInLink).should('be.visible')
    cy.fixture("userData").then((userData) => {
        cy.contains('Dear ' + userData.firstName + ' ' + userData.lastName)
        cy.contains('Note: Your user name is ' + userData.userName)
    })
}

export function fillNewUserData(){
    cy.fixture("userData").then((userData) => {
        cy.get(firstName).type(userData.firstName)
        cy.get(lastName).type(userData.lastName)
        cy.get(phone).type(userData.phone)
        cy.get(email).type(userData.email)
        cy.get(address1).type(userData.address1)
        cy.get(address2).type(userData.address2)
        cy.get(city).type(userData.city)
        cy.get(state).type(userData.state)
        cy.get(postalCode).type(userData.postalCode)
        
        cy.get(country).select(userData.country)

        cy.get(userName).type(userData.userName)
        cy.get(password).type(userData.password)
        cy.get(confirmPassword).type(userData.confirmPassword)
    })
}