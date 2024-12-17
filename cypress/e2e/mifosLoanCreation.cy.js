///<reference types='cypress'/>
import { mifosLoanCreation_page } from "../Pages/mifosLoanCreation_page.cy";
describe('mifos test', ()=>{

    const mf = new mifosLoanCreation_page()
    beforeEach(()=>{
      mf.visit()
      //it('verify login with valid credentials',()=>{
        cy.fixture('mifosData').then((data)=>{
            mf.enterUsername(data.username)
            mf.enterPassword(data.password)
            mf.clickSignIn()
        })
    //})
    })

    it('Loan Creation',()=>{
        cy.fixture('mifosData').then((data)=>{
            mf.selectAclient()
            mf.selectLoanClient()
            mf.clickNewLoan()
            mf.clickSelectLoan()
            mf.selectLoanTerm()
            mf.selectLoanPurpose()
            mf.chooseDate(data.date)
            mf.enterExtId(data.id)
            mf.linkSaving()
            mf.checkBox()
            mf.clickNextBtn()
            mf.selectLoanTerm()
            mf.selectPayFrequency()
            mf.enterRepayDat(data.date2)
            mf.instalAmount()
            mf.selectTranch()
            mf.clickSecndNextBtn()
            mf.clickthrdNextBtn()
            mf.clickSubmit()

            
        })
    })
})