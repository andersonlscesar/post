export class Form {
    constructor(form, options) {
        this.form = form;
        this.options = options;
    }
    isEmpty(input) {
        this.form.addEventListener('submit', (e) => {
            // Impedindo o form de fazer o submit
            let inputValue = input.value;
            if (inputValue.trim() === '' || inputValue === null) {
                e.preventDefault();
                return false;
            }
        });
        return true;
    }
    setMessage(message) {
        this.message = message;
        console.log(this.message);
    }
}
