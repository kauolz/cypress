/// <reference types="cypress" />

import {urls} from '../../../fixtures/urls.json'

const header = '.header'
const loginTab = '[href="/login"]'
const accountSettingsTab = '[href="/settings"]'
const formHeader = '.mat-card-title'
//Login tab
const LoginAccontNameInput = '[name="account"]'
const loginUserNameInput = '[name="username"]'
const loginPasswordInput = '[name="password"]'
const loginBtn = 'button'
//Account Settings tab
const accountsList = '#mat-select-0'
const createBtn = '.action-container button:nth-child(2)'
const quickCreateBtn = '.action-container button:nth-child(3)'
//Quick create form
const quickCreateHeader = '.container mat-card:nth-child(2) .mat-card-title'
const saveBtn = '.centered-container button:nth-child(1)'
const cancelBtn = '.centered-container button:nth-child(2)'
const idInput = '[name="id"]'
const createAccountNameInput = '[name="name"]'
//Account created
const createdAccountId = '.mat-column-id'
const createdAccountName = '.mat-column-name'
const editAccount = '[title="Edit"]'
const removeAccount = '[title="Delete"]'

const createdUserId = '.sub-container .mat-row .mat-column-id'
const createdUserName = '.sub-container .mat-row .mat-column-name'
const createdUserLogin = '.sub-container .mat-row .mat-column-login'
const createdUserPassword = '.sub-container .mat-row .mat-column-password'
const loginToUserAccountID = '[title="Login to DMM"]'
const editUserAccountID = '.sub-container .mat-icon-button.mat-primary'
const removeUserAccountID = '.sub-container .mat-icon-button.mat-warn'

export function openLoginPage(env) {

    switch(env){
        case "dev" : cy.fixture("urls").then((urls) => { cy.visit(urls.dev) }); break;
        case "stg" : cy.fixture("urls").then((urls) => { cy.visit(urls.stg) }); break;
        case "local" : cy.fixture("urls").then((urls) => { cy.visit(urls.local) }); break;
        default : console.log("Improper env parameter!"); 
    }
    // if (env=="dev"){
    //     cy.fixture("urls").then((urls) => {
    //         cy.visit(urls.dev)
    //     })     
    // }
    // if (env=="stg"){
    //     cy.fixture("urls").then((urls) => {
    //         cy.visit(urls.stg)
    //     })
    // }
    // if (env=="local"){
    //     cy.fixture("urls").then((urls) => {
    //         cy.visit(urls.local)
    //     })
    // }
    // else { break; }
}

export function checkIfMockPageOpened(){
    cy.get(header).should('be.visible')
    cy.get(loginTab).should('be.visible')
    cy.get(accountSettingsTab).should('be.visible')
    cy.get(formHeader).should('be.visible')
    cy.get(formHeader).contains("Log in to TIS-Web DMM:")
    cy.get(LoginAccontNameInput).should('be.visible')
    cy.get(loginUserNameInput).should('be.visible')
    cy.get(loginPasswordInput).should('be.visible')
    cy.get(loginBtn).should('be.visible')
}

export function checkIfAccountSettingsTabOpened(){
    cy.get(header).should('be.visible')
    cy.get(loginTab).should('be.visible')
    cy.get(accountSettingsTab).should('be.visible')
    cy.get(formHeader).should('be.visible')
    cy.get(formHeader).contains("Account Settings")
    cy.get(accountsList).should('be.visible')
    cy.get(createBtn).should('be.visible')
    cy.get(quickCreateBtn).should('be.visible')
}

export function checkIfQuickCreateFormVisible(){
    cy.get(quickCreateHeader).should("be.visible")
    cy.get(quickCreateHeader).contains("Quick create new SP Account")
    cy.get(saveBtn).should('be.visible')
    cy.get(cancelBtn).should('be.visible')
    cy.get(idInput).should('be.visible')
    cy.get(createAccountNameInput).should('be.visible')
}

export function randomAccountName(){
    const nameTimestamp = Cypress.moment().format('DDMMYYYYhhmmss')
    return nameTimestamp
}

export function checkAccountCreatedSettingsPage(name){
    cy.get(name => {
        cy.get(createdAccountId).should('be.visible')
        cy.get(createdAccountId).contains(cy.get("@accountIdFromLink"))
        cy.get(createdAccountName).should('be.visible')
        cy.get(createdAccountName).contains(name)
        cy.get(editAccount).should('be.visible')
        cy.get(removeAccount).should('be.visible')

        cy.get(createdUserId).should('be.visible')
        cy.get(createdUserName).should('be.visible')
        cy.get(createdUserName).contains(name)
        cy.get(createdUserLogin).should('be.visible')
        cy.get(createdUserLogin).contains(name)
        cy.get(createdUserPassword).should('be.visible')
        cy.get(createdUserPassword).contains(name)

        cy.get(loginToUserAccountID).should('be.visible')
        cy.get(editUserAccountID).should('be.visible')
        cy.get(removeUserAccountID).should('be.visible')
    })
}

export function getURL(){
    cy.url().then(url => {
        cy.wrap(url).as("currentURL")
      })
}

export function getIdFromLink(link){
    cy.get(link)
    .then(link => {
        let linkCut = String(link).split("/")
        let index = linkCut.lastIndexOf("settings") + 1
        let linkCutId = linkCut[index]
        cy.wrap(linkCutId).as("accountIdFromLink")
    })
}

export function writeContentToJsonFile(content, fileName){
    cy.get(content).then(content =>{
        cy.writeFile('cypress/fixtures/' + fileName + '.json', { content : content})
    })
}

export function createNewAccount(){
    cy.get(accountSettingsTab).click()
    checkIfAccountSettingsTabOpened()

    cy.get(quickCreateBtn).click()
    checkIfQuickCreateFormVisible()

    // this should be function? ->
    const randomName = "testAcc-" + randomAccountName()
    cy.get(createAccountNameInput).type(randomName)
    cy.get(saveBtn).click()
    cy.wait(7000)
    // cy.get(randomName).as("@createdAccountName")
    checkAccountCreatedSettingsPage(randomName)
    // <-- 
    
    getURL()
    getIdFromLink("@currentURL")
    writeContentToJsonFile("@accountIdFromLink", "accountID")
}

export function loginWIthAccountId(nameOfFileWithId){
    cy.get(accountSettingsTab).click()
    getURL()
    cy.get("@currentURL").then((url => {
        cy.fixture("accountId").then((accountId) => { 
            cy.visit(url + "/" + accountId.content)
        })
    }))
    cy.get(loginToUserAccountID).click()

}
    

    // cy.readFile('cypress/fixtures/' + nameOfFileWithId).then(accId => {
    //     cy.get(accId => {
    //         console.log("accId: " + accId)
    //     })
    // })
    // cy.fixture("accountId").then((accountId) => { 
    //     cy.visit("@currentURL"+accountId.content) 
    
    // })


    // // cy.get(nameOfFileWithId =>{
    //     let idFromFile = cy.readFile('cypress/fixtures/' + nameOfFileWithId)
    //     console.log("idFromFile: " + idFromFile)
    //     cy.get(idFromFile => {
    //         console.log("idFromFile: " + idFromFile)
    //     })
    // // })
// }

// export function loginToApplication(accountName, username, password){
    

// }