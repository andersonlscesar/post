import { Modal } from "../Classes/Modal.js";

export function modal() {
    // Modal de publicação da postagem
    const closeModal = <HTMLButtonElement> document.querySelector('.cancel-button')
    const openModal = <HTMLElement> document.querySelector('.publish')
    const modalPublish = new Modal(openModal, closeModal)
}