import { Form } from "../Classes/Form.js";
export function loginValidateForm() {
    const loginForm = document.querySelector('#login-form');
    const location = document.querySelector('#body-login');
    console.log(location);
    const form = new Form(location);
    loginForm.addEventListener('submit', (e) => {
        if (!form.isEmpty(loginForm.usuario)) {
            e.preventDefault();
            form.getErrorMessage('Informe o usuário');
        }
        else if (!form.isEmpty(loginForm.senha)) {
            e.preventDefault();
            form.getErrorMessage('Informe a senha');
        }
    });
}
