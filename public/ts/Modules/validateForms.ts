import { Form } from "../Classes/Form.js";
import { FormInput } from "../Classes/FormInput.js";

export function loginForm() {

    let loginForm = <HTMLFormElement> document.querySelector('#login-form');

    // Verificando a existência do elemento

    if(loginForm) {
        let form            = new Form(loginForm);
        let inputUsuario    = <HTMLInputElement> loginForm.usuario;
        let inputPassword   = <HTMLInputElement> loginForm.senha;
        let allInputs = [ inputUsuario, inputPassword ];
        
        let formInput = new FormInput(form, allInputs);
    }
}