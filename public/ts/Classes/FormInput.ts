import { Form } from "./Form.js";

export class FormInput {

    private inputs: HTMLInputElement[];
    private formElement: Form;

    constructor(formElement: Form, inputs: HTMLInputElement[]) {
        this.formElement = formElement;
        this.inputs = inputs;      
    }

    


}