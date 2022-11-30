export class Form {
    constructor(location, form, options) {
        this.location = location;
        this.form = form;
        this.options = options;
        this.location = location;
        this.form = form;
    }
    /**
     * Verifica se existe valor no input
     * @param input
     * @returns { boolean}
     */
    isEmpty(input) {
        this.inputElement = input;
        if (input.value.trim() === '' || input.value === null) {
            return false;
        }
        return true;
    }
    /**
     * Cria através do DOM elementos HTML e os insere e depois de alguns segundos, os remove
     * @param message
     */
    getErrorMessage(message) {
        if (!this.form.hasAttribute('data-alert')) {
            let input = this.inputElement;
            this.form.setAttribute('data-alert', '');
            this.message = message;
            const errorMessageDiv = document.createElement('div');
            errorMessageDiv.classList.add('error-message');
            const errorMessageInfo = document.createElement('span');
            errorMessageInfo.classList.add('error-message__info');
            errorMessageInfo.innerText = this.message;
            errorMessageDiv.appendChild(errorMessageInfo);
            this.location.appendChild(errorMessageDiv);
            input.style.boxShadow = '0px 0px 2px 2px #d25536';
            //Remove o aviso após alguns segundos
            const myInterval = setTimeout(() => {
                errorMessageDiv.remove();
                input.style.boxShadow = 'none';
                this.form.removeAttribute('data-alert');
            }, 6000);
            this.whereTyping(errorMessageDiv, myInterval); // Verifica quando o usuário estiver digitando                
        }
    }
    /**
     * Verifica um determinado grupo de caracteres
     * @param input
     * @returns { boolean }
     */
    whereAplhanumeric(input) {
        this.inputElement = input;
        const alphanumeric = /^[a-zA-Z0-9\@]*$/;
        const inputValue = input.value;
        if (!alphanumeric.test(inputValue)) {
            return false;
        }
        return true;
    }
    /**
     * Esta função removerá qualquer aviso caso o usuário começe a digitar nos inputs
     */
    whereTyping(element, myInterval) {
        if (element) {
            this.form.addEventListener('keyup', (e) => {
                clearInterval(myInterval);
                let input = e.target;
                input.style.boxShadow = 'none';
                element.remove();
                this.form.removeAttribute('data-alert');
            });
        }
    }
    /**
     * Caso seja necessário remover uma mensagem no momento de validação em outro form
     *
     */
    removeErrorMessage() {
        var _a;
        if (document.querySelector('.error-message')) {
            (_a = document.querySelector('.error-message')) === null || _a === void 0 ? void 0 : _a.remove();
        }
    }
}
//# sourceMappingURL=Form.js.map