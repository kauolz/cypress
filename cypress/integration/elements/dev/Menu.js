/// <reference types="cypress" />

import {collapseMenu} from '../dev/Page_Header'

const menuHeader = '.sidebar-nav .ng-tns-c2-0'
const dashboardMenuItem = '.a-dashboard'
const remindersMenuItem = '.a-reminders'
const downloadMenuItem = '.a-download'
const reportsMenuItem = '.a-reports'
const driversMenuItem = '.a-drivers'
const vehiclesMenuItem = '.a-vehicles'
const settingsMenuItem = '.a-settings'
const menuTimer = '.clock__container'


export function openPage(pageToOpen){
    switch(pageToOpen){
        case "dashboards" : cy.get(dashboardMenuItem).click(); collapseMenu(); cy.wait(1000); break;
        case "reminders" : cy.get(remindersMenuItem).click(); collapseMenu(); cy.wait(1000); break;
        case "download" : cy.get(downloadMenuItem).click(); collapseMenu(); cy.wait(1000); break;
        case "reports" : cy.get(reportsMenuItem).click(); collapseMenu(); cy.wait(1000); break;
        case "drivers" : cy.get(driversMenuItem).click(); collapseMenu(); cy.wait(1000); break;
        case "vehicles" : cy.get(vehiclesMenuItem).click(); collapseMenu(); cy.wait(1000); break;
        case "settings" : cy.get(settingsMenuItem).click(); collapseMenu(); cy.wait(1000); break;
        default : console.log("Improper page to open!"); break;
    }

    
}

