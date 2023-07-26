describe('Book A Call', () => {
    it('Test 1', () => {
  
      //To View in 1280*786
      cy.viewport(1280, 720)
  
      //Object to load website
      cy.URL()

      //Wait
      //cy.wait(10000)

      //Close Alert 
      //cy.get('.dialog-close-button').click()

      

      //To Book A Call
      //cy.get('a[role="button"]').eq(0).click();
      //cy.xpath('(//a[@role="button"])[1]').click();

      cy.xpath('(//a[@role="button"])[1]')
      .should('be.visible') // Wait for the element to be visible
      .click();
      
      cy.wait(10000)
      //Form
      //cy.get('#form-field-name').clear().type('Raja Junaid Ullah Khan')


    })

    //For uncaught exception 

    Cypress.on('uncaught:exception', (err, runnable) => {
      // Handle the uncaught exception here
      console.error('Uncaught exception:', err);
      // Return false to prevent Cypress from failing the test
      return false;
    })
})