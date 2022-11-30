import { AnimationForm } from "./Animation.js";
import { Form } from "./Form.js";
export class FormSwitch extends AnimationForm {
    constructor() {
        super();
        this.initialElement = document.querySelector('a[data-js="cad--link"]');
        this.secondElement = document.querySelector('a[data-js="login--link"]');
        this.hideLoginForm();
        this.hideCadForm();
    }
    /**
     * Método responsável por esconder o formulário de login e exibir o de cadastro
     * @return { void }
     */
    hideLoginForm() {
        if (this.initialElement) {
            const loginForm = document.querySelector('.section-login-form');
            const cadForm = document.querySelector('.section-cad-form');
            // Adicionando evento ao elemento
            this.initialElement.addEventListener('click', (e) => {
                e.preventDefault();
                // Selecionando os formulários para remover qualquer mensagem de erro que apareça no momento da animação
                const login = document.querySelector('#login-form');
                const cad = document.querySelector('#cad-form');
                if (login.hasAttribute('data-alert')) {
                    login.removeAttribute('data-alert');
                    new Form(login).removeErrorMessage();
                }
                if (cad.hasAttribute('data-alert')) {
                    cad.removeAttribute('data-alert');
                    new Form(cad).removeErrorMessage();
                }
                this.addElement(loginForm).animateToLeftDirection();
                this.addElement(cadForm).animateFromRightDirection();
            });
        }
    }
    /**
     * Método responsável por esconder o formulário de cadastro
     * @return { void }
     */
    hideCadForm() {
        if (this.secondElement) {
            const loginForm = document.querySelector('.section-login-form');
            const cadForm = document.querySelector('.section-cad-form');
            this.secondElement.addEventListener('click', (e) => {
                e.preventDefault();
                // Selecionando os formulários para remover qualquer mensagem de erro que apareça no momento da animação
                const login = document.querySelector('#login-form');
                const cad = document.querySelector('#cad-form');
                if (login.hasAttribute('data-alert')) {
                    login.removeAttribute('data-alert');
                    new Form(login).removeErrorMessage();
                }
                if (cad.hasAttribute('data-alert')) {
                    cad.removeAttribute('data-alert');
                    new Form(cad).removeErrorMessage();
                }
                this.addElement(cadForm).animateToRightDirection();
                this.addElement(loginForm).animateFromLeftDirection();
                // cadForm.style.animationDirection = 'reverse'
            });
        }
    }
}
//# sourceMappingURL=FormSwitch.js.map