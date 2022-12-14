import { FormSwitch } from './Classes/FormSwitch.js'
import { Loading } from './Classes/Loading.js'

import { loginValidateForm, cadValidateForm, commentValidateForm } from './Modules/FormValidation.js'
import { modal } from './Modules/Modal.js'
import { previewImage } from './Modules/previewImages.js'

new FormSwitch() // Responsável pela animação dos formulários iniciais
new Loading() // Responsável pelo loader principal
loginValidateForm() // Validação do form de login
cadValidateForm() // Validação do form de cadastro
modal() // Responsável pela abertura e fechamento de modais
previewImage() // Responsável por permitir a pré-visualização das imagens
commentValidateForm() // Responsável por validar o formulário de comentários
