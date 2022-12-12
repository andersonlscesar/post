export class Alert {

    private location!:       HTMLElement;
    private alertMessage:   string = '';




    /**
     * Define a mensagem para o Alert
     * @param message 
     * @return { Alert }
     */


    setAlertMessage(message: string): Alert {
        this.alertMessage = message;
        return this;
    }

    getErrorMessage(element: HTMLInputElement | HTMLTextAreaElement) {
        let divErrorMessage = document.createElement('div');
        divErrorMessage.classList.add('error-message');
        divErrorMessage.textContent = this.alertMessage;
        element.style.boxShadow = '0px 0px 5px #d25536';
        // this.getLocation.appendChild( divErrorMessage );
    }

    
}