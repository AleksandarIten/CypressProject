import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given('A user opens the login page', ()=>{
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
})

When ('A user enter the email {string}', (email)=>{
    cy.get('#email').type(email)
})

And ('A user enter the password {string}', (password)=>{
    cy.get('#password').type(password)
})

And ('A user clicks on the login button', ()=>{
    cy.get(':nth-child(3) > .btn').click()
})

Then('A user will be logged in', ()=>{
    cy.url().should('contains','/header.php')
})

Then('A user will be receiveing a faild message', ()=>{
    cy.get('span > b').should('have.text',"Enter your Email address and password correct" )
})

When('A user clicks on the log out button', ()=>{
    cy.get('.button_to > .btn').click()
})

Then('A user logged out', ()=>{
    cy.url().should('contains','/index.php')
})
