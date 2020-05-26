/// <reference types="cypress" />

import {checkMainPageOpened} from '../elements/tours/mainPage'
import {registerNewUser} from '../elements/tours/registerPage'
import {openPage} from '../elements/tours/Navigation'

describe('Test', () => {
    it('Check if main page was opened properly', () => {
        checkMainPageOpened()
    })
    it('Open Register page', () => {
        openPage('REGISTER')

    })
    it('Create new user', () => {
        registerNewUser()

    })
    
})