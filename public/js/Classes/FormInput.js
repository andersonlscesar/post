export class FormInput {
    constructor(formElement, alert) {
        this.formElement = formElement;
        this.alert = alert;
    }
    /**
     * Define o input a ser verificado
     * @param input
     * @returns
     */
    addInput(input) {
        this.input = input;
        return this;
    }
    /**
     * Verifica se o input definido está vázio, caso sim, o evento submit será previnido
    */
    isEmpty() {
        this.formElement.getFormElement.addEventListener('submit', (e) => {
            if (this.input.value.trim() === '') {
                e.preventDefault();
                this.alert.getErrorMessage();
            }
        });
        return this.alert;
    }
}
//# sourceMappingURL=FormInput.js.map