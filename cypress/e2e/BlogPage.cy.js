const neatcsv = require('neat-csv');

describe('About Page', () => {
  let sar; // Declare a variable to store the data retrieved from the CSV file

  before(() => {
    cy.fixture('testdata.csv')
      .then(neatcsv) //Convert CSV file into an Object
      .then((data) => {
        sar = data; // Store the data in the 'sar' variable
      });
  });

  it('Test 1', () => {
    cy.viewport(1280, 720);

    cy.visit('https://leeddev.io/');

    cy.xpath('(//a[text()="Blogs"])[1]').click();

    cy.xpath('//h2[text()="Blog"]').should('exist');

    // You can now access the 'sar' variable containing the CSV data in the test case
    cy.get('input[type="search"]').clear().type(sar[0]['Search']);
    cy.get('input[type="search"]').type('{enter}');

    cy.wait(5000); // Wait for search results to load

    cy.get('.elementor-element-d5564f9 > .elementor-widget-container > .elementor-heading-title')
      .should('exist')
      .contains(`Search Results for: ${sar[0]['Search']}`);
  });

  //For uncaught exception 
    Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the uncaught exception here
    console.error('Uncaught exception:', err);
    // Return false to prevent Cypress from failing the test
    return false;
  });

});
