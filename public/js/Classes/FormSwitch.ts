import { AnimationForm } from "./Animation.js"

export class FormSwitch extends AnimationForm {
    initialElement: HTMLElement | null
    secondElement: HTMLElement | null

    constructor() {
        super()
        this.initialElement = document.querySelector('a[data-js="cad--link"]')   
        this.secondElement  = document.querySelector('a[data-js="login--link"]')
        
        this.hideLoginForm()    
        this.hideCadForm() 
    }

    /**
     * Método responsável por esconder o formulário de login e exibir o de cadastro
     * @return { void }
     */

    private hideLoginForm(): void {

        if(this.initialElement) {
            const loginForm = <HTMLDivElement> document.querySelector('.section-login-form')!
            const cadForm   = <HTMLDivElement> document.querySelector('.section-cad-form')!

            // Adicionando evento ao elemento
            this.initialElement.addEventListener('click', (e) => {
                e.preventDefault()
                this.addElement(loginForm).animateToLeftDirection()
                this.addElement(cadForm).animateFromRightDirection()
            })
        }
    }

    /**
     * Método responsável por esconder o formulário de cadastro
     * @return { void }
     */

    private hideCadForm(): void {
        if(this.secondElement) {
            const loginForm = <HTMLDivElement> document.querySelector('.section-login-form')!
            const cadForm   = <HTMLDivElement> document.querySelector('.section-cad-form')!

            this.secondElement.addEventListener('click', (e) => {
                e.preventDefault()
                this.addElement(cadForm).animateToRightDirection()
                this.addElement(loginForm).animateFromLeftDirection()
                
                // cadForm.style.animationDirection = 'reverse'

            })
        }
    }
}