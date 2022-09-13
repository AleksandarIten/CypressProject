Feature: Request Quotation Feature

    #This feature is required for a user to Request Quotation.
    Scenario: Save Request Quotation
    Given A user opens the Home page
    When A user clicks the tab Request Quotation
    And A user select the Breakdowncover "At home"
    And A user clicks on the yes radio input Windscreenrepair "Yes"
    And A user enter the incidents "0"
    And A user enter the Registration "dsgas10"
    And A user enter the Annual mileage "30000"
    And A user enter the Estimated value "10000"
    And A user select the Parking Location "Street/Road"
    And A user change the date Start of policy "2015" "March" "19"
    And A user clicks on the Seve Quotation
    Then Opens a New Quotation page where is id of Quotation


    Scenario: Chack Request Quotation is saved 
    When A user clicks back from New Quotation page
    And A user clicks the tab Retrieve Quotation
    And A user enter a identification number
    And A user clicks on the Retieve button 
    Then A user see table Retrieve Quotation and see that Breakdowncover it is missing
      | Insurance Name          | Value         | 
      | Breakdowncover          | At home       |
      | Windscreenrepair        | Yes           |
      | incidents               | 0             |
      | Registration            | dsgas10       |
      | Annual mileage          | 30000         |
      | Estimated value	        | 10000         |
      | Parking Location        | Road          |
      | Start of policy         | 2015.3.19     |
