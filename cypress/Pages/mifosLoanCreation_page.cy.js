export class mifosLoanCreation_page {
    visitUrl = "https://demo.mifos.io/"
    MFUsername = "input#uid"
    MFPassword = "input#pwd"
    MFClickSignIn = "button#login-button"
    MFselectClient = "li:nth-of-type(1) > .dropdown-toggle.ng-binding"
    MFselectInClient= "#swatch-menu > li:nth-child(1) > a:nth-child(1)"
    MFSelectloanClient = "tr:nth-of-type(15) > td:nth-of-type(1)"
    MFClickNewLoan= ".btn-group.col-md-11.col-sm-11.ng-scope.pull-right.row > a:nth-of-type(2)"
    MFClickSelectLoan= "select#productId"
    MFselectLoanTerm= "select#fundId"
    mfSelectLoanPurpose= ".chosen-single > span:nth-child(1)"
    //"div#loanPurposeId_chosen  span"

    MFchooseDate= "#expectedDisbursementDate"
    MFextId= "input#externalId"
    MFclickNextBtn= "button.btn:nth-child(11)"
    MFselectLinkSavings= "#linkAccountId"
    MFcheckBox= "#createStandingInstruction"
    MFloanTerm= "#loanTermFrequencyType"
    MFchosePayFrequency= "#repaymentFrequencyType"
    MFchoseRepayDat= "#repaymentsStartingFromDate"
    MFinstalAmount= "#fixedEmiAmount"
    MFTranchDate= "[title] .fa-plus"
    MFdisburseDate= "#disbursementDetail\\[0\\]\\.expectedDisbursementDate"
    MFprincipal= "table.width100:nth-child(4) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > input:nth-child(1)"
    MFclickSecndNextBtn= "button.btn:nth-child(7)"
    MFclickthrdNextBtn= "form[name='Charges']  .btn.btn-default.pull-right"
    MFclickSubmit= "#save"
    


    


    visit() {
        cy.visit('https://demo.mifos.io/'
            //cy.wait(30000)
        )
    }
    enterUsername(username) {
        cy.wait(2000)
        cy.get(this.MFUsername).type(username)
    }
    enterPassword(password) {
        cy.get(this.MFPassword).type(password)
    }
    clickSignIn() {
        cy.get(this.MFClickSignIn).click()
    }
    //select client
    selectAclient(){
        //cy.get(this.MFselectClient)
        cy.contains('Clients').trigger('mouseover')
        //cy.wait(8000)
        cy.get(this.MFselectInClient).click()
    }
    selectLoanClient(){
        cy.get(this.MFSelectloanClient).click()
    }
    clickNewLoan(){
        cy.get(this.MFClickNewLoan).click()
    }
    clickSelectLoan(){
        cy.get(this.MFClickSelectLoan).select('My Product')//.select('Home Loan')
    }
    selectLoanTerm(){
        cy.get(this.MFselectLoanTerm).select('Mid loan funds')
    }
    selectLoanPurpose(){
        cy.get(this.mfSelectLoanPurpose).click()
        cy.get('.chosen-search > input:nth-child(1)').type('WORKING CAPITAL')
    }
    chooseDate(date){
        cy.get(this.MFchooseDate).type(date)
    }
    enterExtId(id){
        cy.get(this.MFextId).type(id)

    }
    linkSaving(){
        cy.get(this.MFselectLinkSavings).select('Wallet Savings Account')
    }
    checkBox(){
        cy.get(this.MFcheckBox).check()
    }
    clickNextBtn(){
        cy.get(this.MFclickNextBtn).click()
    }
    selectLoanTerm(){
        cy.get(this.MFloanTerm).select('Days', {force: true})
    }
    selectPayFrequency(){
        cy.get(this.MFchosePayFrequency).select('Days')
    }
    enterRepayDat(date){
        cy.get(this.MFchoseRepayDat).type(date)
    }
    instalAmount(){
        cy.get(this.MFinstalAmount).type("1000")
    }
    selectTranch(){
        cy.get(this.MFTranchDate).click()
        cy.get(this.MFdisburseDate).type('23 December 2024')
        cy.get(this.MFprincipal).type('6000')
    }
    clickSecndNextBtn(){
        cy.get(this.MFclickSecndNextBtn).click()
    }
    clickthrdNextBtn(){
        cy.get(this.MFclickthrdNextBtn).click()
    }
    clickSubmit(){
        cy.get(this.MFclickSubmit).click()
    }




}