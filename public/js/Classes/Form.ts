interface Options {
    borderColor?: string,
    textColor?: string,
    backgroundColor?: string
}


export class Form {

    private form: HTMLFormElement
    private message!: string
    options?: Options

    constructor( form: HTMLFormElement, options?: Options) {
        this.form = form
        this.options = options
    }

    isEmpty(input: HTMLInputElement): boolean {
        this.form.addEventListener('submit', (e) => {
            // Impedindo o form de fazer o submit
            let inputValue = input.value
            if(inputValue.trim() === '' || inputValue === null) {
                e.preventDefault()            
                return false
            }
        })
        return true
    }

    setMessage(message: string): void {
        this.message = message
        console.log(this.message)
    }

}