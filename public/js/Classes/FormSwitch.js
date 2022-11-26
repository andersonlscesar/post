export class FormSwitch {
    constructor() {
        this.initialElement = document.querySelector('a[data-js="cad--link"]');
        this.hideLoginForm();
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
}
