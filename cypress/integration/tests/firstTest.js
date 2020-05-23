/// <reference types="cypress" />

// import HomePage from '../elements/HomePage';
// import signInButton from '../elements/Header'

//Header
const logo = '.logo'
const searchInput = '#search_query_top'
const signInButton = '.login'
//Authentication page
const pageHeader = 'h1.page-heading'
const createAccountButton = '#SubmitCreate'
const validationMessage = '#create_account_error'
const createAccountEmailInput = '#email_create'
const emailValue = 'dupa@123.hł'


describe('Test', () => {
    it.only('What the hell?', () => {
        cy.visit('http://automationpractice.com')

        cy.get(logo).should('be.visible')
        cy.get(searchInput).should('be.visible')
        cy.get(signInButton).should('be.visible')
        cy.get(signInButton).click()
        // signInButton.should('be.visible')
        cy.get(pageHeader).contains('Authentication')
        cy.get(createAccountButton).should('be.visible')
        cy.get(createAccountButton).click()
        cy.get(validationMessage).contains('Invalid email address.')
        cy.get(createAccountEmailInput).type(emailValue)
        cy.get(createAccountButton).click()
        cy.get(pageHeader).contains('Create an account')
    })
})