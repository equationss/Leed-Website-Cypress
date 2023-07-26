describe('Home Page', () => {
  it('Test 1', () => {

    //To View in 1280*786
    cy.viewport(1280, 720)

    //Object to load website
    cy.URL()

    //Wait for popup to load
    cy.wait(10000)

    //Wait for Popup to load.
    cy.get('.elementor-element-e692bf4 > .elementor-widget-wrap').should('exist');


    //Button for Take to our services
    cy.get('.elementor-element-067e2e8 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click()

    //Click on a service
    cy.get('.elementor-element-b2cfa00 > .elementor-widget-wrap').should('exist')

  })
})