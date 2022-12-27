import { Form } from "../Classes/Form.js";
import { FormInput } from "../Classes/FormInput.js";

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
            } else if(!formInput.isEmpty(inputPassword)) {
                e.preventDefault();
                formInput.getAlert.setAlertMessage('Informe a senha').getError(inputPassword).addLocation(loginSection);
            }
        });

    }
}



export function cadForm() {
    let cadForm = <HTMLFormElement> document.querySelector('#cad-form');

    if(cadForm) {
        let loginSection    = <HTMLElement> document.querySelector('#login-cad-section');
        let form            = new Form(cadForm);
        let inputName       = cadForm.nome;
        let inputUserName   = cadForm.usuario;
        let inputEmail      = cadForm.email;
        let inputPassword   = cadForm.senha;
        let inputPasswordConfirm = cadForm.confirmar_senha;
        let formInput = new FormInput(form);


        cadForm.addEventListener('submit', (e) => {
            if(!formInput.isEmpty(inputName)) {
                e.preventDefault();
                formInput.getAlert.setAlertMessage('Informe um nome').getError(inputName).addLocation(loginSection);                
            } else if(!formInput.isEmpty(inputUserName)) {
                e.preventDefault();
                formInput.getAlert.setAlertMessage('Informe um nome de usuário').getError(inputUserName).addLocation(loginSection);
            } else if(!formInput.isEmpty(inputEmail)) {
                e.preventDefault();
                formInput.getAlert.setAlertMessage('Informe um e-mail').getError(inputEmail).addLocation(loginSection);
            } else if(!formInput.isEmpty(inputPassword)) {
                e.preventDefault();
                formInput.getAlert.setAlertMessage('Informe a senha').getError(inputPassword).addLocation(loginSection);
            } else if(!formInput.isEmpty(inputPasswordConfirm)) {
                e.preventDefault();
                formInput.getAlert.setAlertMessage('confirme sua senha').getError(inputPasswordConfirm).addLocation(loginSection);
            } else if(inputPassword.value !== inputPasswordConfirm.value) {
                e.preventDefault();
                formInput.getAlert.setAlertMessage('As senhas não coincidem').getError(inputPasswordConfirm).addLocation(loginSection);
                
            }
        });

    }
}