export class Alert {
    constructor(location) {
        this.alertMessage = '';
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
    getErrorMessage() {
        console.log(this.alertMessage);
    }
}
//# sourceMappingURL=Alert.js.map