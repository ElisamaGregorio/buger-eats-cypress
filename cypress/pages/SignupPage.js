

class SignupPage {
    go() {
        cy.visit('/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1')

    }

    fillForm(deliver) {
        cy.get('input[name="name"]').type(deliver.name),
            cy.get('input[name="cpf"]').type(deliver.cpf),
            cy.get('input[name="email"]').type(deliver.email),
            cy.get('input[name="whatsapp"]').type(deliver.whatsapp),

            cy.get('input[name="postalcode"]').type(deliver.address.postalcode),
            cy.get('input[type=button][value="Buscar CEP"]').click(),
            cy.get('input[name="address-number"]').type(deliver.address.number),
            cy.get('input[name="address-details"]').type(deliver.address.details),

            cy.get('input[name="address"]').should('have.value', deliver.address.street),
            cy.get('input[name="district"]').should('have.value', deliver.address.district),
            cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state),

            cy.get('.delivery-method li [alt="Moto"]').click(),
            cy.get('input[accept^="image"]').selectFile('cypress/fixtures/imagens/cnh-digital.jpg', { force: true })

    }

    submit() {
        cy.get('form button[type="submit"]').click({ force: true })

    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', expectedMessage)

    }

    alertMensageSholdBe(expectedMessage) {
        cy.contains('.alert-error', expectedMessage).should('be.visible')


    }



}
export default new SignupPage;