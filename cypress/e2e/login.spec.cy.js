describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: "[name = 'username']",
  passwordField: "[name='password']",
  loginButto:"[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb",
  wrongCredentialAlert:"[role='alert']"   
}


  it('Login - Succesess',() => {
    cy.visit(' https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButto).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
      
  it('Login - Fail', () => {
    cy.visit(' https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('test')
    cy.get(selectorsList.loginButto).click()
    cy.get(selectorsList.wrongCredentialAlert)
   
  })
    
})

