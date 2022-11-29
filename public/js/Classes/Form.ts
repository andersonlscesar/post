interface Options {
    borderColor?: string,
    textColor?: string,
    backgroundColor?: string
}


export class Form {

    private message!: string
    options?: Options

    constructor(public location:HTMLElement, options?: Options) {
        this.options = options
        this.location = location
    }

     isEmpty(input: HTMLInputElement): boolean {
        if(input.value.trim() === '' || input.value === null) {           
            return false
        }
        return true
    }

     getErrorMessage(message: string): void {
        this.message = message
        const errorMessageDiv = document.createElement('div')
        errorMessageDiv.classList.add('error-message')
        const errorMessageInfo = document.createElement('span')
        errorMessageInfo.classList.add('error-message__info')
        errorMessageInfo.innerText = this.message
        errorMessageDiv.appendChild( errorMessageInfo )
        this.location.appendChild( errorMessageDiv )        
    }



}