import { Form } from "../Classes/Form.js";
import { FormInput } from "../Classes/FormInput.js";
import { Alert } from "../Classes/Alert.js";

export function loginForm() {

    let loginForm = <HTMLFormElement> document.querySelector('#login-form');

    // Verificando a existência do elemento

    if(loginForm) {
        let loginSection    = <HTMLElement> document.querySelector('#login-cad-section');
        let form            = new Form(loginForm);
        let inputUsuario    = <HTMLInputElement> loginForm.usuario;
        let inputPassword   = <HTMLInputElement> loginForm.senha;
        let formInput = new FormInput(form);

        loginForm.addEventListener('submit', (e) => {
            if(!formInput.isEmpty(inputUsuario)) {
                e.preventDefault();
                formInput.getAlert.setAlertMessage('Informe o usuário ou e-mail').getError(inputUsuario).addLocation(loginSection);
            }
        });

    }
}