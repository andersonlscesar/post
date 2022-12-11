import { Alert } from "./Alert.js";
import { Form } from "./Form.js";

export class FormInput {

    private input!: HTMLInputElement;
    private formElement: Form;
    private alert: Alert;

    constructor(formElement: Form, alert: Alert) {
        this.formElement = formElement;
        this.alert       = alert;
    }


    /**
     * Define o input a ser verificado
     * @param input 
     * @returns 
     */

    addInput(input: HTMLInputElement): FormInput {
        this.input = input;
        return this;
    }    
    /**
     * Verifica se o input definido está vázio, caso sim, o evento submit será previnido
    */
   
   isEmpty(): Alert {
        this.formElement.getFormElement.addEventListener('submit', (e) => {

            if(this.input.value.trim() === '') {
                e.preventDefault();
                this.alert.getErrorMessage();
            }

        });
        
        return this.alert;        
    }



}