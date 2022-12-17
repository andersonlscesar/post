import { Form } from "../Classes/Form.js";
import { FormInput } from "../Classes/FormInput.js";
export function loginForm() {
    let loginForm = document.querySelector('#login-form');
    // Verificando a existência do elemento
    if (loginForm) {
        let loginSection = document.querySelector('#login-cad-section');
        let form = new Form(loginForm);
        let inputUsuario = loginForm.usuario;
        let inputPassword = loginForm.senha;
        let formInput = new FormInput(form);
        loginForm.addEventListener('submit', (e) => {
            if (!formInput.isEmpty(inputUsuario)) {
                e.preventDefault();
                formInput.getAlert.setAlertMessage('Informe o usuário ou e-mail').getError(inputUsuario).addLocation(loginSection);
            }
            else if (!formInput.isEmpty(inputPassword)) {
                e.preventDefault();
                formInput.getAlert.setAlertMessage('Informe a senha').getError(inputPassword).addLocation(loginSection);
            }
        });
    }
}
//# sourceMappingURL=validateForms.js.map