import { Form } from "../Classes/Form.js";
export function loginValidateForm() {
    const loginForm = document.querySelector('#login-form');
    const form = new Form(loginForm);
    form.isEmpty(loginForm.usuario);
}
