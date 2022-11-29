import { Form } from "../Classes/Form.js";
export function loginValidateForm() {
    const loginForm = document.querySelector('#login-form');
    const location = document.querySelector('#body-login');
    const form = new Form(location, loginForm);
    loginForm.addEventListener('submit', (e) => {
        // Verificando se os campos estão vazios
        if (!form.isEmpty(loginForm.usuario)) {
            e.preventDefault();
            form.getErrorMessage('Informe o usuário');
        }
        else if (!form.isEmpty(loginForm.senha)) {
            e.preventDefault();
            form.getErrorMessage('Informe a senha');
        }
        // Verificando o que é digitado no campo
        if (!form.whereAplhanumeric(loginForm.usuario)) {
            e.preventDefault();
            form.getErrorMessage('Caracteres inválidos');
        }
    });
}
