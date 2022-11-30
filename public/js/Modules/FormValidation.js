import { Form } from "../Classes/Form.js";
export function loginValidateForm() {
    const loginForm = document.querySelector('#login-form');
    if (loginForm) {
        const location = document.querySelector('#login-cad-section');
        const form = new Form(loginForm, location);
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
}
export function cadValidateForm() {
    var _a;
    const cadForm = document.querySelector('#cad-form');
    if (cadForm) {
        const location = document.querySelector('#login-cad-section');
        const form = new Form(cadForm, location);
        (_a = cadForm.parentElement) === null || _a === void 0 ? void 0 : _a.addEventListener('animationend', () => { form.removeErrorMessage(); });
        cadForm.addEventListener('submit', (e) => {
            if (!form.isEmpty(cadForm.nome)) {
                e.preventDefault();
                form.getErrorMessage('Informe o nome');
            }
            else if (!form.isEmpty(cadForm.usuario)) {
                e.preventDefault();
                form.getErrorMessage('Informe o usuário');
            }
            else if (!form.isEmpty(cadForm.email)) {
                e.preventDefault();
                form.getErrorMessage('Informe o email');
            }
            else if (!form.isEmpty(cadForm.senha)) {
                e.preventDefault();
                form.getErrorMessage('Informe a senha');
            }
            else if (!form.isEmpty(cadForm.confirmar_senha)) {
                e.preventDefault();
                form.getErrorMessage('Confirme a senha');
            }
            else if (cadForm.senha.value !== cadForm.confirmar_senha.value) {
                e.preventDefault();
                form.setInputElement = cadForm.confirmar_senha;
                form.getErrorMessage('As senhas estão divergentes');
            }
        });
    }
}
//# sourceMappingURL=FormValidation.js.map