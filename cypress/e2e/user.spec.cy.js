import userData from '../fixtures/userdata.json' 

describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton:"[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert:"[role='alert']", 
  myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
  firstNamefield:"[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-dd-mm']",
  dateCloseButton: ".--close",
  SubmitButton: "[type='submit']"


}

  it.only('User info Update - Succesess',() => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid),
    cy.get(selectorsList.myInfoButton).click(),
    cy.get(selectorsList.firstNamefield).type('FirstNameTest')
    cy.get(selectorsList.lastNameField).type('LastNameTest')
    cy.get(selectorsList.genericField).eq(2).clear().type('NicknameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(7).clear().type('2026-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.SubmitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })
      
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
    
})
