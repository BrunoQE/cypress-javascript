Feature: Gestão de Funcionários PIM

    @Cadastro
    Scenario: Gerenciar funcionários com sucesso
        Given que eu estou na funcionalidade de cadastro de funcionários
        When realizo o cadastro de 3 funcionários com dados válidos
        Then o funcionário deve ser exibido na lista de funcionários
        And realizar a exclusão de 2 funcionários
        When edito os funcionarios restantes
        And faço logout com sucesso
