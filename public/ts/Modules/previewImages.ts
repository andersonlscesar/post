import { PreviewImage } from "../Classes/PreviewImage.js"

export function previewImage() {

    // Previsualizador de imagens para a o formulário de publicação    
    const formElement = <HTMLFormElement> document.querySelector('#form-publish')
    if(formElement) {
        const viewer = <HTMLImageElement> document.querySelector('.preview-image')
        new PreviewImage(formElement, formElement.publish_image, viewer)
    }
}