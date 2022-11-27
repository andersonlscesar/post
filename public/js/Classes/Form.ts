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

    isEmpty(input: HTMLInputElement) {
        this.form.addEventListener('submit', (e) => {
            // Impedindo o form de fazer o submit
            e.preventDefault()            
            let inputValue = input.value
            console.log(inputValue)
        })
    }



}