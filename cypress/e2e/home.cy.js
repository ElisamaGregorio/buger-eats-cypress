

describe('Home page', ()=>{

    it('App deve estar online',()=>{
        cy.visit('https://buger-eats.vercel.app/'),
        cy.get('#page-home main h1')
    })
})