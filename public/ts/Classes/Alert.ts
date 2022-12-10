import { Form } from "./Form.js";

export class Alert {

    private location:       HTMLElement;
    private form:           Form;
    private alertMessage:   string = '';
    
    constructor(form: Form, location: HTMLElement) {
        this.form = form;
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
}