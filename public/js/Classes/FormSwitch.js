import { AnimationForm } from "./Animation.js";
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
                this.addElement(cadForm).animateToRightDirection();
                this.addElement(loginForm).animateFromLeftDirection();
                // cadForm.style.animationDirection = 'reverse'
            });
        }
    }
}
//# sourceMappingURL=FormSwitch.js.map