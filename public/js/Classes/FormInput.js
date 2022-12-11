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
        return this.alert;
    }
    /**
     * Verifica se o input definido está vázio, caso sim, o evento submit será previnido
    */
    isEmpty(input) {
        let inputValue = input.value;
        if (inputValue.trim() === '') {
            return false;
        }
        return true;
    }
}
//# sourceMappingURL=FormInput.js.map