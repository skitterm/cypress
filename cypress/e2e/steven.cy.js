describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://www.chromatic.com')    

    // run rrweb here instead... but how...
    // override cy, but it's a global
    
    //  Verify that the value has been updated
    cy.window().then((win) => {
      cy.takeChromaticSnapshot(win);
    })
    cy.get('.css-17z0wpj.e1mpatka3').should('have.text', 'Ship UIs faster by automating grunt work')
  })
})