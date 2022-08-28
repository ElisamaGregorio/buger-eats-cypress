

describe('Home page', ()=>{

    it('App deve estar online',()=>{
        cy.visit('/'),
        cy.get('#page-home main h1')
    })
})