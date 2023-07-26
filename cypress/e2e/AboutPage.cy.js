describe('About Page', () => {
    it('Test 1', () => {
  
      //To View in 1280*786
      cy.viewport(1280, 720)
  
      //Object to load website
      cy.URL()

      // Go to Page
      cy.xpath('(//a[@class="hfe-menu-item"])[5]').click()
      //cy.get('#menu-item-14 > .hfe-menu-item').click()


      //Assertion
      cy.xpath('//h2[text()="Why Choose Us?"]').should('exist')

      

    })

    //For uncaught exception 

    Cypress.on('uncaught:exception', (err, runnable) => {
      // Handle the uncaught exception here
      console.error('Uncaught exception:', err);
      // Return false to prevent Cypress from failing the test
      return false;
    })
})







