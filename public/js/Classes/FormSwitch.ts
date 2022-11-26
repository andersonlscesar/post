export class FormSwitch {
    initialElement: HTMLElement | null

    constructor() {
        this.initialElement = document.querySelector('a[data-js="cad--link"]')   

        this.hideLoginForm()     
    }

    /**
     * Método responsável por esconder o formulário de login e exibir o de cadastro
     * @return { void }
     */

    private hideLoginForm(): void {

        if(this.initialElement) {
            const loginForm = <HTMLDivElement> document.querySelector('.section-login-form')!
            const cadForm = <HTMLDivElement> document.querySelector('.section-cad-form')!
            // Adicionando evento ao elemento
            this.initialElement.addEventListener('click', (e) => {
                e.preventDefault()
                loginForm.classList.add('login--hide')
                cadForm.classList.add('cad--show')
            })
        }
    }
}