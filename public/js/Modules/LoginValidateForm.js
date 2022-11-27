import { Form } from "../Classes/Form.js";
export function loginValidateForm() {
    const loginForm = document.querySelector('#login-form');
    const form = new Form(loginForm);
    if (!form.isEmpty(loginForm.usuario)) {
        console.log('informe o usuário');
        form.setMessage('Informe o usuário');
        return false;
    }
    else if (!form.isEmpty(loginForm.senha)) {
        form.setMessage('Informe a senha');
        return false;
    }
}
