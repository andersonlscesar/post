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
            this.form.setAttribute('data-alert', '');
            this.message = message;
            const errorMessageDiv = document.createElement('div');
            errorMessageDiv.innerHTML = '';
            errorMessageDiv.classList.add('error-message');
            const errorMessageInfo = document.createElement('span');
            errorMessageInfo.classList.add('error-message__info');
            errorMessageInfo.innerText = this.message;
            errorMessageDiv.appendChild(errorMessageInfo);
            errorMessageDiv.style.opacity = 'none';
            this.location.appendChild(errorMessageDiv);
            this.inputElement.style.boxShadow = '0px 0px 2px 2px #d25536';
            setTimeout(() => {
                errorMessageDiv.remove();
                this.inputElement.style.boxShadow = 'none';
                this.form.removeAttribute('data-alert');
            }, 6000);
        }
    }
    whereAplhanumeric(input) {
        this.inputElement = input;
        const alphanumeric = /^[a-zA-Z0-9\@]*$/;
        const inputValue = input.value;
        if (!alphanumeric.test(inputValue)) {
            return false;
        }
        return true;
    }
}
