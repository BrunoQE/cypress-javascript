// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.overwrite('visit', (originalFn, ...args) => {
    const portalUrl = Cypress.env("portal_url")
    let url = '';

    if (typeof args[0] === 'string') {
        url = args[0]
    }

    if(portalUrl && url.startsWith(portalUrl)){
        const app = window.top
        if(!app.document.querySelector('[data-hide-command-log-request]')){
            const style = app.document.createElement('style');
            style.innerHTML = '.command-name-request, .command-name-xhr {display: none}';
            style.setAttribute('data-hide-command-log-request', '');

            app.document.head.appendChild(style)
        }
    }

    return originalFn(...args);
})