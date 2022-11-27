import { Animation } from "./Animation.js"

export class FormSwitch extends Animation {
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
                loginForm.classList.add('login--hide')
                cadForm.classList.add('cad--show')
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
                cadForm.style.opacity = '1'
                cadForm.classList.add('cad--hide')

                cadForm.addEventListener('animationend', () => {
                    cadForm.style.opacity = '0'
                    cadForm.style.pointerEvents = 'none'
                })
                
                // cadForm.style.animationDirection = 'reverse'

            })
        }
    }
}