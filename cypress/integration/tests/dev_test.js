/// <reference types="cypress" />

import {openLoginPage, checkIfMockPageOpened, createNewAccount, loginWIthAccountId} from '../elements/dev/Mock_page'
import {createNewSite} from '../elements/dev/Settings_page'

describe('TEST: Create new account', () => {

    // it('Open page', () => {
    //     openLoginPage("local")
    // })

    // it('Check opened page', () => {
    //     checkIfMockPageOpened()
    // })

    // it('Crete new account', () => {
    //     createNewAccount()
    // })

    it('Login to created account', () =>{
        openLoginPage("local")
        checkIfMockPageOpened()
        loginWIthAccountId("accountId.json")
        createNewSite("Nowa sajta")
    })

})