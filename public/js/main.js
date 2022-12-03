import { FormSwitch } from './Classes/FormSwitch.js';
import { loginValidateForm, cadValidateForm } from './Modules/FormValidation.js';
import { modal } from './Modules/Modal.js';
import { previewImage } from './Modules/previewImages.js';
new FormSwitch(); // Responsável pela animação dos formulários iniciais
loginValidateForm(); // Validação do form de login
cadValidateForm(); // Validação do form de cadastro
modal(); // Responsável pela abertura e fechamento de modais
previewImage(); // Responsável por permitir a pré-visualização das imagens
//# sourceMappingURL=main.js.map