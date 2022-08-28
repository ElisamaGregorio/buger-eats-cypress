import signup from '../pages/SignupPage'

describe('Cadastro', () => {

  beforeEach(function () {
    cy.fixture('deliver').then((d) => {
      this.deliver = d

    })
  })

  it('User should be deliver', function () {

    signup.go()
    signup.fillForm(this.deliver.signup)
    signup.submit()

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMessage)

  }),

    it('Incorrect document', function () {

      signup.go()
      signup.fillForm(this.deliver.cpf_inv)
      signup.submit()

      signup.alertMensageSholdBe('Oops! CPF inválido')
    }),

    it('Required fields', function () {

      signup.go()
      signup.submit()
      signup.alertMensageSholdBe('É necessário informar o nome')
      signup.alertMensageSholdBe('É necessário informar o CPF')
      signup.alertMensageSholdBe('É necessário informar o email')
      signup.alertMensageSholdBe('É necessário informar o CEP')
      signup.alertMensageSholdBe('É necessário informar o número do endereço')
      signup.alertMensageSholdBe('Selecione o método de entrega')
      signup.alertMensageSholdBe('Adicione uma foto da sua CNH')
    })

  
})