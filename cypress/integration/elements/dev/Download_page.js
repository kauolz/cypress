/// <reference types="cypress" />

const header = '.download-ui header'
const driverCardHeader = '.tis-card.mat-card .main-title'
const driverCardImage = '[href="/settings"]'
const driverCardDownloadBtn = '.mat-card-title'



export function checkIfDownloadPageOpened(){
    cy.get(header).should('be.visible')
    cy.get(header).contains('PLEASE SELECT A DOWNLOAD DEVICE')
}