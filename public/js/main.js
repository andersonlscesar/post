import { FormSwitch } from './Classes/FormSwitch.js';
import { loginValidateForm, cadValidateForm } from './Modules/FormValidation.js';
import { modal } from './Modules/Modal.js';
new FormSwitch(); // Responsável pela animação dos formulários iniciais
loginValidateForm(); // Validação do form de login
cadValidateForm(); // Validação do form de cadastro
modal(); // Responsável pela abertura e fechamento de modais
//# sourceMappingURL=main.js.map