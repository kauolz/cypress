/// <reference types="cypress" />

const logo = ''
const menuExpand = '#menu-btn'
const menuCollapse = '#menu-btn'
const siteName = ''
const loggedUser = ''
const userMenu = ''

export function collapseMenu(){
    cy.get(menuCollapse).click()
}