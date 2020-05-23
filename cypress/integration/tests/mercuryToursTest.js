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
        cy.visit('http://newtours.demoaut.com/mercurywelcome.php')

        cy.get('a').contains('REGISTER').click()
        // cy.get(logo).should('be.visible')
        // cy.get(searchInput).should('be.visible')
        // cy.get(signInButton).should('be.visible').click()
        // // signInButton.should('be.visible')
        // cy.get(pageHeader).contains('Authentication')
        // cy.get(createAccountButton).should('be.visible').click()
        // cy.get(validationMessage).contains('Invalid email address.')
        // cy.get(createAccountEmailInput).type(emailValue)
        // cy.get(createAccountButton).click()
        // cy.get(pageHeader).contains('Create an account')
    })
})