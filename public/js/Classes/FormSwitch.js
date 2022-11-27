import { Animation } from "./Animation.js";
export class FormSwitch extends Animation {
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
                loginForm.classList.add('login--hide');
                cadForm.classList.add('cad--show');
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
                cadForm.style.opacity = '1';
                cadForm.classList.add('cad--hide');
                cadForm.addEventListener('animationend', () => {
                    cadForm.style.opacity = '0';
                    cadForm.style.pointerEvents = 'none';
                });
                // cadForm.style.animationDirection = 'reverse'
            });
        }
    }
}
