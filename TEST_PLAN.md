# Plano de Testes – OrangeHRM

## 1. Objetivo
Validar os principais fluxos funcionais do módulo PIM (Gestão de Funcionários),
garantindo a qualidade das funcionalidades de login, cadastro, edição, exclusão
e listagem de funcionários através de testes automatizados end-to-end.

## 2. Escopo

### Em Escopo
- Login (campos obrigatórios, credenciais inválidas e válidas)
- Cadastro de funcionários
- Listagem de funcionários
- Edição de funcionários
- Exclusão de funcionários
- Logout



## 2. Estratégia de Testes
- Testes automatizados end-to-end utilizando Cypress + Cucumber (BDD)
- Abordagem baseada em cenários críticos de negócio
- Dados de teste dinâmicos para evitar conflitos no ambiente demo
- Execução em modo headless e interativo
- Evidências geradas via relatório HTML e screenshots

## 3. Tipos de Teste
- Testes Funcionais
- Testes End-to-End


## 4. Ambiente de Teste
- Sistema: OrangeHRM Demo
- URL: https://opensource-demo.orangehrmlive.com
- Browser: Chrome, Electron ou Edge
- Ambiente compartilhado (dados podem variar)

## 5. Ferramentas
- Cypress
- Cucumber
- Node.js
- Git / GitHub
- Cucumber HTML Report

## 6. Critérios de Entrada
- Ambiente disponível
- Credenciais válidas
- Massa de dados criada dinamicamente

## 7. Critérios de Saída
- Todos os cenários executados
- Sem falhas críticas
- Evidências geradas

## 8. Riscos e Mitigações
| Risco | Mitigação |
|------|-----------|
| Ambiente compartilhado | Uso de dados dinâmicos |
| Instabilidade do ambiente | Esperas determinísticas |
| Dados excluídos por terceiros | Criação de dados no próprio teste |

## 9. Responsável
Bruno Silva de Souza – Quality Engineer
