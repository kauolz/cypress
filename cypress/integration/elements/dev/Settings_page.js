/// <reference types="cypress" />

import {openPage} from '../dev/Menu'

const administrationTab = '.administration'
const sitesTab = '.sites-groups'
const legalTab = '.legal'
const remindersTab = '.reminders'

const createNewSiteBtn = '.add'


export function openSettingsTab(tabToOpen){
    switch(tabToOpen){
        case 'administration' : cy.get(administrationTab).click(); break;
        case 'sites' : cy.get(sitesTab).click(); break;
        case 'legal' : cy.get(legalTab).click(); break;
        case 'reminders' : cy.get(remindersTab).click(); break;
        default : console.log("Improper settings tab to open!"); break;
    }
}

export function createNewSite(siteName){
    openPage("settings")
    openSettingsTab("sites")
    cy.get(createNewSiteBtn).click()


}