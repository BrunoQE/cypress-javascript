## :memo: Descrição
Framework de automação cypress com cenários Web e Api

## :books: Pré-requisitos
Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

* git (versão 2.49.0)
* Node.js (versão v22.15.0)
* NPM (versão 10.9.2)
* <b>Obs.:</b> Recomendo utilizar as mesmas versões, ou versões mais recentes dos sistemas citados acima.

* <b>Obs. 2:</b> Ao instalar o Node.js o NPM é instalado automaticamente.

* <b>Obs. 3:</b> Para verificar as versões do git, Node.js e NPM instaladas em seu computador, execute o comando git --version && node --version && npm --version no seu terminal de linha de comando.

## Clonando o projeto 🐑
Abra o navegador, acesse a URL https://github.com/BrunoQE/cypress-javascript.git, clique no botão Code, escolha uma opção de clone (HTTPS ou SSH), copie o link de clone do projeto, e em seu terminal de linha de comando (em uma pasta onde você armazene seus projetos de software), execute o comando <b>git clone [cole-o-link-copiado-aqui].</b>

Após o clone do projeto, acesse o diretório recém clonado (ex.: cd cypress-javascript).

Dentro do diretório cypress-javascript você terá os sub-diretórios .git/ (diretório oculto), cypress/, e os arquivos .gitignore, cypress.config, package-lock.json, package.json, README.md e TEST_PLAN.md.

## Instalação das dependências de desenvolvimento
Com o projeto clonado a partir do GitHub, é hora de instalarmos suas depedências de desenvolvimento.

Visto que tais dependências já estão listadas no arquivo package.json, basta executar o comando <b>npm install</b> na raiz do projeto.

## Executando os testes
Estando na raiz do projeto Execute o comando <b>npm run cypress:open</b> para abrir o cypress, caso queira rodar no seu terminal de linha de comando basta executar <b>npm run test:report</b>

## Evidencias
No fim da execução dos testes será criado um relatório que fica na pasta <b>cypress/reports/cucumber-html</b> basta abrir o arquivo <b>index.html</b> para ter o detalhe da automação 

## :wrench: Tecnologias utilizadas
ºNode.js v22.15.0\
ºNPM 10.9.2\
º@badeball/cypress-cucumber-preprocessor 24.0.0\
º@bahmutov/cypress-esbuild-preprocessor 2.2.8\
ºCypress 15.9.0\
ºMultiple-cucumber-html-reporter 3.9.3


## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/BrunoQE">
        <img src="https://avatars.githubusercontent.com/u/260292096?s=400&u=1646f68e0e95320cb32a23dad1fba79513093925&v=4"
          width="100px;"
          alt="Foto de Bruno Souza"
          />
          <br>
        <sub>
          <b>Bruno Souza</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto
* Concluído
