export class Alert {
    constructor(form, location) {
        this.alertMessage = '';
        this.form = form;
        this.location = location;
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
}
