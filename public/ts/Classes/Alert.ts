import { Form } from "./Form.js";

export class Alert {

    private location:       HTMLElement;
    private alertMessage:   string = '';
    
    constructor(location: HTMLElement) {
        this.location = location;
    }

    /**
     * Define a mensagem para o Alert
     * @param message 
     * @return { Alert }
     */

    setAlertMessage(message: string): Alert {
        this.alertMessage = message;
        return this;
    }

    getErrorMessage() {
        console.log(this.alertMessage);
    }

    
}