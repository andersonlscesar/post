import { Alert } from "./Alert.js";
import { Form } from "./Form.js";

export class FormInput {

    private input!: HTMLInputElement;
    private formElement: Form;
    private alert: Alert;

    constructor(formElement: Form) {
        this.formElement = formElement;
        this.alert       = new Alert;
    }

    get getAlert(): Alert {
        return this.alert;
    }

    /**
     * Define o input a ser verificado
     * @param input 
     * @returns 
     */

    addInput(input: HTMLInputElement): Alert {
        this.input = input;
        return this.alert;
    }    
    /**
     * Verifica se o input definido está vázio, caso sim, o evento submit será previnido
    */
   
   isEmpty(input: HTMLInputElement) {
        let inputValue = input.value;
        if(inputValue.trim() ===  '') {
            return false;
        }

        return true;
    }



}