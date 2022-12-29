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
        this.containerMessage.classList.add('error-message', 'alert-message');
        this.containerMessage.textContent = this.alertMessage;
        element.style.boxShadow = '0px 0px 5px #d25536';
        return this;
    }
    addLocation(location) {
        var _a, _b, _c;
        this.location = location;
        if (!((_a = this.inputElement.form) === null || _a === void 0 ? void 0 : _a.hasAttribute('form-submit')))
            this.location.appendChild(this.containerMessage);
        (_c = (_b = this.inputElement.form) === null || _b === void 0 ? void 0 : _b.querySelector('button[type="submit"]')) === null || _c === void 0 ? void 0 : _c.setAttribute('disabled', '');
        this.removeAlert();
    }
    removeAlert() {
        this.timeOut = setTimeout(() => {
            var _a, _b;
            this.containerMessage.remove();
            this.inputElement.style.boxShadow = 'none';
            (_b = (_a = this.inputElement.form) === null || _a === void 0 ? void 0 : _a.querySelector('button[type="submit"]')) === null || _b === void 0 ? void 0 : _b.removeAttribute('disabled');
        }, 3000);
    }
    removeAsSoonAsPossible() {
        var _a, _b;
        if (this.timeOut) {
            clearTimeout(this.timeOut);
            this.containerMessage.remove();
            this.inputElement.style.boxShadow = 'none';
            (_b = (_a = this.inputElement.form) === null || _a === void 0 ? void 0 : _a.querySelector('button[type="submit"]')) === null || _b === void 0 ? void 0 : _b.removeAttribute('disabled');
        }
    }
}
//# sourceMappingURL=Alert.js.map