import { Form } from "../Classes/Form.js";

export function loginValidateForm() {

    const loginForm = <HTMLFormElement> document.querySelector('#login-form')  
    if(loginForm) {
        const location = <HTMLElement> document.querySelector('#login-cad-section')
        const form = new Form(loginForm, location )
        
        loginForm.addEventListener('submit', (e) => {
            // Verificando se os campos estão vazios
         
            
            if(!form.isEmpty(loginForm.usuario)) {
                e.preventDefault()
                form.getErrorMessage('Informe o usuário')
    
            } else if(!form.isEmpty(loginForm.senha)) {
                e.preventDefault()
                form.getErrorMessage('Informe a senha')
            }
    
            // Verificando o que é digitado no campo
    
            if(!form.whereAplhanumeric(loginForm.usuario)) {
                e.preventDefault()
                form.getErrorMessage('Caracteres inválidos')
            }    
        })    
       
    }
}

export function cadValidateForm() {
    const cadForm = <HTMLFormElement> document.querySelector('#cad-form')

    if(cadForm) {
        const location = <HTMLElement> document.querySelector('#login-cad-section')
        const form = new Form(cadForm, location)

        cadForm.parentElement?.addEventListener('animationend', () => { form.removeErrorMessage() })

        cadForm.addEventListener('submit', (e) => {
        
            if(!form.isEmpty(cadForm.nome)) {
                e.preventDefault()
                form.getErrorMessage('Informe o nome')
            } else if(!form.isEmpty(cadForm.usuario)) {
                e.preventDefault()
                form.getErrorMessage('Informe o usuário')
            } else if(!form.isEmpty(cadForm.email)) {
                e.preventDefault()
                form.getErrorMessage('Informe o email')
            } else if(!form.isEmpty(cadForm.senha)) {
                e.preventDefault()
                form.getErrorMessage('Informe a senha')
            } else if(!form.isEmpty(cadForm.confirmar_senha)) {
                e.preventDefault()
                form.getErrorMessage('Confirme a senha')
            } else if(cadForm.senha.value !== cadForm.confirmar_senha.value) {
                e.preventDefault()
                form.setInputElement = cadForm.confirmar_senha 
                form.getErrorMessage('As senhas estão divergentes')
            }

            // Validando caracteres

            if(!form.whereAplhanumeric(cadForm.nome)) {
                e.preventDefault()
                form.getErrorMessage('Nome inválido')
            } else if(!form.whereAplhanumeric(cadForm.usuario)) {
                e.preventDefault()
                form.getErrorMessage('Usuário inválido')
            } else if(!form.whereAplhanumeric(cadForm.email)) {
                e.preventDefault()
                form.getErrorMessage('E-mail inválido')
            }
        })
    }
}


export function commentValidateForm() {
    const formComment = <HTMLFormElement> document.querySelector('#form__comment')

    if(formComment) {
        const location = <HTMLElement> document.querySelector('#feed')
        const form = new Form(formComment, location)
        const submitArea = <HTMLDivElement> document.querySelector('.submit-area')

        // Trecho responśavel por exibir o btn de submit no form de comentário
        formComment.comment.addEventListener('focusin', () => {          
            submitArea.style.height = `${submitArea.scrollHeight + 20}px`
            submitArea.style.opacity = '1'
            formComment.comment.setAttribute('rows', '5')
        }, { once: true })

        formComment.addEventListener('submit', (e) => {
            if(!form.isEmpty(formComment.comment)) {
                e.preventDefault()
                form.getErrorMessage('Digite um comentário')
            } 
        })
    }

}


