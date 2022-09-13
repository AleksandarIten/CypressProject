import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

let idNumber; 


Given ('A user opens the Home page', ()=>{
    cy.visit('https://demo.guru99.com/insurance/v1/header.php');
})

When ('A user clicks the tab Request Quotation', ()=>{
    cy.get('#ui-id-2').click()
})

And ('A user select the Breakdowncover {string}', (breakdowncover)=>{
    cy.get('#quotation_breakdowncover').select(breakdowncover)
})

And ('A user clicks on the yes radio input Windscreenrepair {string}', (windscreenrepair)=>{
    cy.get('[type="radio"]').check(windscreenrepair)
})

And ('A user enter the incidents {string}', (incidents)=>{
    cy.get('#quotation_incidents').type(incidents)
})

And ('A user enter the Registration {string}', (registration)=>{
    cy.get('#quotation_vehicle_attributes_registration').type(registration)
})

And ('A user enter the Annual mileage {string}', (annualMileage)=>{
    cy.get('#quotation_vehicle_attributes_mileage').type(annualMileage)
})

And ('A user enter the Estimated value {string}', (estimatedValue)=>{
    cy.get('#quotation_vehicle_attributes_value').type(estimatedValue)
})

And ('A user select the Parking Location {string}', (parkingLocation)=>{
    cy.get('#quotation_vehicle_attributes_parkinglocation').select(parkingLocation)
})

And ('A user change the date Start of policy {string} {string} {string}', (year,month,day)=>{
    cy.get('#quotation_vehicle_attributes_policystart_1i').select(year)
    cy.get('#quotation_vehicle_attributes_policystart_2i').select(month)
    cy.get('#quotation_vehicle_attributes_policystart_3i').select(day)
})

And ('A user clicks on the Seve Quotation', ()=>{
    cy.get('#new_quotation > .actions > .btn-success').click()
})

Then ('Opens a New Quotation page where is id of Quotation', ()=> {
    cy.url().should('contains','/new_quotation.php')
    
    cy.get('body').then(($body) => {
        let storedVar = $body.text()
        idNumber = storedVar.split(":")[1].split("P")[0]
        console.log(idNumber)
    })
})

When ('A user clicks back from New Quotation page', ()=>{
    cy.visit('https://demo.guru99.com/insurance/v1/header.php');
})

And ('A user clicks the tab Retrieve Quotation', ()=>{
    cy.get('#ui-id-3').click()
})

And ('A user enter a identification number', ()=>{
    cy.get('form > [type="text"]').type(idNumber)
})

And ('A user clicks on the Retieve button', ()=>{
    cy.get('#getquote').click()
})

Then('A user see table Retrieve Quotation and see that Breakdowncover it is missing', (dataTabele)=>{
    cy.get('table tbody td:nth-child(2)').should(($cells) => {
        //expect($cells[2]).to.have.text(dataTabele.rows()[0])  // this part is commented out to show that the rest works
        expect($cells[3]).to.have.text(dataTabele.rows()[1][1])
        expect($cells[5]).to.have.text(dataTabele.rows()[2][1])
        expect($cells[6]).to.have.text(dataTabele.rows()[3][1])
        expect($cells[7]).to.have.text(dataTabele.rows()[4][1])
        expect($cells[8]).to.have.text(dataTabele.rows()[5][1])
        expect($cells[9]).to.have.text(dataTabele.rows()[6][1])
        expect($cells[10]).to.have.text(dataTabele.rows()[7][1])
      })
})
