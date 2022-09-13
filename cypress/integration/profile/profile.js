import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"


Given('A user opens the login page', ()=>{
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
})


When ('A user login with email and password {string} {string}', (username,password)=>{
    cy.get('#email').type(username)
    cy.get('#password').type(password)
    cy.get(':nth-child(3) > .btn').click()
})

Then ('A user clicks the tab Profile, user cant see profile data', ()=>{
    cy.get('#ui-id-4').click()
})

When ('A user clicks the tab Edit Profile', ()=>{
    cy.get('#ui-id-5').click()
})

And ('A user enter surname {string}', (surname)=>{
    cy.get('#user_surname').type(surname)
})

Then ('A user clicks Update User, and nothing happened', ()=>{
    cy.get('#edit_user_ > .actions > .btn').click()
})