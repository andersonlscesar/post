export class Alert {

    private location:           any;
    private alertMessage:       string = '';
    private containerMessage!: HTMLDivElement;
    private inputElement!: HTMLInputElement | HTMLTextAreaElement;
    private timeOut!: number;
    
    /**
     * Define a mensagem para o Alert
     * @param message 
     * @return { Alert }
     */


    setAlertMessage(message: string): Alert {
        this.alertMessage = message;
        return this;
    }

    getError(element: HTMLInputElement | HTMLTextAreaElement): Alert {
        this.inputElement = element;
        this.containerMessage = document.createElement('div');
        this.containerMessage.classList.add('error-message', 'alert-message');
        this.containerMessage.textContent = this.alertMessage;
        element.style.boxShadow = '0px 0px 5px #d25536';
        return this;
    }

    addLocation(location: HTMLElement) {
        this.location = location;        
        if( !this.inputElement.form?.hasAttribute('form-submit') ) this.location.appendChild( this.containerMessage );                
        this.inputElement.form?.querySelector('button[type="submit"]')?.setAttribute('disabled', '');        
        this.removeAlert();
    }
    
    private removeAlert() {
        setTimeout(() => {
            this.containerMessage.remove();
            this.inputElement.style.boxShadow = 'none';
            this.inputElement.form?.querySelector('button[type="submit"]')?.removeAttribute('disabled');
            
        }, 3000);       
    }

    removeAsSoonAsPossible() {
        if(this.timeOut) {
            clearTimeout(this.timeOut);
            this.containerMessage.remove();
            this.inputElement.style.boxShadow = 'none';
            this.inputElement.form?.querySelector('button[type="submit"]')?.removeAttribute('disabled');
        }
    }    
}