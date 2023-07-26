describe('About Page', () => {
    it('Test 1', () => {
  
      //To View in 1280*786
      cy.viewport(1280, 720)
  
      //Object to load website
      cy.URL()

      // Go to Page
      cy.xpath('(//a[@href="https://leeddev.io/blogs/"])[1]').click()

      //Assertion
      cy.xpath('//h2[text()="Blog"]').should('exist')


      //Search Article
      cy.xpath('//input[@type="search"]').clear().type('Cyber Security')
      cy.xpath('//input[@type="search"]').type('{enter}')

      cy.wait(5000)

      //Search Assertion
      //cy.get('.elementor-element-d5564f9 > .elementor-widget-container > .elementor-heading-title').should('exist')
      cy.get('.elementor-element-d5564f9 > .elementor-widget-container > .elementor-heading-title')
      .should('exist')
      .contains('Search Results for: Cyber Security')
    

    })

    //For uncaught exception 

    Cypress.on('uncaught:exception', (err, runnable) => {
      // Handle the uncaught exception here
      console.error('Uncaught exception:', err);
      // Return false to prevent Cypress from failing the test
      return false;
    })
})







