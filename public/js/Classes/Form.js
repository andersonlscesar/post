export class Form {
    constructor(form, options) {
        this.form = form;
        this.options = options;
    }
    isEmpty(input) {
        this.form.addEventListener('submit', (e) => {
            // Impedindo o form de fazer o submit
            e.preventDefault();
            let inputValue = input.value;
            console.log(inputValue);
        });
    }
}
