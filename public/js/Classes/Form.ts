import { Modal } from "./Modal.js"

export class Form {
    private form: HTMLFormElement
    private inputElement!: HTMLInputElement

    constructor(form: HTMLFormElement) {
        this.form = form
        new Modal
    }

    /**
     * Método responsavel por definir um input
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






}