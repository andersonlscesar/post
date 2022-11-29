export class Form {
    constructor(location, options) {
        this.location = location;
        this.options = options;
        this.location = location;
    }
    isEmpty(input) {
        if (input.value.trim() === '' || input.value === null) {
            return false;
        }
        return true;
    }
    getErrorMessage(message) {
        this.message = message;
        const errorMessageDiv = document.createElement('div');
        errorMessageDiv.classList.add('error-message');
        const errorMessageInfo = document.createElement('span');
        errorMessageInfo.classList.add('error-message__info');
        errorMessageInfo.innerText = this.message;
        errorMessageDiv.appendChild(errorMessageInfo);
        this.location.appendChild(errorMessageDiv);
    }
}
