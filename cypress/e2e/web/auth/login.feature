Feature: fazer login

    @ID-01
    Scenario: Validar login requerido
        Given que eu não informe usuário e senha
        When clico em login
        Then valido mensagem de campo obrigatório

    Scenario: Validar login inválido
        Given que eu informo usuário e senha inválidos
        When clico em login
        Then valido mensagem de erro "Invalid credentials"

    Scenario: Validar login com sucesso
        Given que eu informo usuário e senha válidos
        When clico em login
        Then valido que a tela de dashboard é exibida
