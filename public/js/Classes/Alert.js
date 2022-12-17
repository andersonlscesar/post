export class Alert {
    constructor() {
        this.alertMessage = '';
    }
    /**
     * Define a mensagem para o Alert
     * @param message
     * @return { Alert }
     */
    setAlertMessage(message) {
        this.alertMessage = message;
        return this;
    }
    getError(element) {
        this.inputElement = element;
        this.containerMessage = document.createElement('div');
        this.containerMessage.classList.add('error-message');
        this.containerMessage.textContent = this.alertMessage;
        element.style.boxShadow = '0px 0px 5px #d25536';
        return this;
    }
    addLocation(location) {
        var _a, _b, _c, _d;
        this.location = location;
        if (!((_a = this.inputElement.form) === null || _a === void 0 ? void 0 : _a.hasAttribute('form-submit')))
            this.location.appendChild(this.containerMessage);
        (_b = this.inputElement.form) === null || _b === void 0 ? void 0 : _b.setAttribute('form-submit', ''); // Definindo o atributo "form-submit"      
        (_d = (_c = this.inputElement.form) === null || _c === void 0 ? void 0 : _c.querySelector('button[type="submit"]')) === null || _d === void 0 ? void 0 : _d.setAttribute('disabled', '');
        console.log();
        this.removeAlert();
    }
    removeAlert() {
        setTimeout(() => {
            var _a, _b, _c;
            this.containerMessage.remove();
            this.inputElement.style.boxShadow = 'none';
            (_a = this.inputElement.form) === null || _a === void 0 ? void 0 : _a.removeAttribute('form-submit');
            (_c = (_b = this.inputElement.form) === null || _b === void 0 ? void 0 : _b.querySelector('button[type="submit"]')) === null || _c === void 0 ? void 0 : _c.removeAttribute('disabled');
        }, 3000);
    }
}
//# sourceMappingURL=Alert.js.map