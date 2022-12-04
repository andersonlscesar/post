interface Options {
    borderColor?: string,
    textColor?: string,
    backgroundColor?: string
}

export class Form {
    private message!: string
    options?: Options
    private inputElement!: HTMLInputElement

    constructor(public form?: HTMLFormElement, public location?:HTMLElement, options?: Options) {
        this.options = options
        this.location = location
        this.form = form
    }

    /**
     * Método responsavel por definir um input, caso seja preciso definir fora da classe
     * @param { HTMLInputElement } input      * 
     */

    set setInputElement(input: HTMLInputElement) {
        this.inputElement = input
    }

    /**
     * Verifica se existe valor no input
     * @param input 
     * @returns { boolean}
     */

     isEmpty(input: HTMLInputElement): boolean {
        this.inputElement = input
        if(input.value.trim() === '' || input.value === null) {           
            return false
        }
        return true
    }

    /**
     * Cria através do DOM elementos HTML e os insere e depois de alguns segundos, os remove
     * @param message  
     */
    

     getErrorMessage(message: string): void {
         if(this.form) {
             if(!this.form.hasAttribute('data-alert')) {
                let input = this.inputElement
                this.form.setAttribute('data-alert', '')
                this.message = message
                const errorMessageDiv = document.createElement('div')
                errorMessageDiv.classList.add('error-message')
                const errorMessageInfo = document.createElement('span')
                errorMessageInfo.classList.add('error-message__info')
                errorMessageInfo.innerText = this.message
                errorMessageDiv.appendChild( errorMessageInfo )
                this.location?.appendChild( errorMessageDiv )     
                input.style.boxShadow = '0px 0px 2px 2px #d25536'
                //Remove o aviso após alguns segundos
                const myInterval = setTimeout(() => {
                    errorMessageDiv.remove()
                    input.style.boxShadow = 'none'
                    if(this.form) this.form.removeAttribute('data-alert')
                  }, 6000)        
                   this.whereTyping(errorMessageDiv, myInterval) // Verifica quando o usuário estiver digitando                
                }
         }


    }

    /**
     * Verifica um determinado grupo de caracteres
     * @param input 
     * @returns { boolean }
     */

    whereAplhanumeric(input: HTMLInputElement): boolean {
        this.inputElement = input
        const alphanumeric = /^[a-zA-Z0-9\@]*$/
        const inputValue = input.value 
        if(!alphanumeric.test(inputValue)) {
           return false
        }
        return true
    }

    /**
     * Esta função removerá qualquer aviso caso o usuário começe a digitar nos inputs
     */

    private whereTyping(element: HTMLDivElement, myInterval: number) {
        if(element && this.form) {
            this.form.addEventListener('keyup', (e) => {
                clearInterval(myInterval)
                let input = <HTMLInputElement> e.target
                input.style.boxShadow = 'none'
                element.remove()
                if(this.form) this.form.removeAttribute('data-alert')
            })
        }
    }

    /**
     * Caso seja necessário remover uma mensagem no momento de validação em outro form
     * 
     */
    removeErrorMessage(): void {
        if(document.querySelector('.error-message') && this.form) {
            document.querySelector('.error-message')?.remove()
            for(let i = 0; i < this.form.children.length; i++) {
                if(this.form.children[i].nodeName === 'INPUT') {
                    let input = <HTMLElement> this.form.children[i]
                    input.style.boxShadow = 'none'                  
                }
            }
           
        }
    }




}