import { Modal } from "../Classes/Modal.js";

export function modal() {
    // Modal de publicação da postagem
    const closeModal = <HTMLButtonElement> document.querySelector('.cancel-button')
    const openModal = <HTMLElement> document.querySelector('.publish')
    const containerModal = <HTMLDivElement> document.querySelector('.modal-container')
    const modalPublish = new Modal()
    modalPublish.setModal(containerModal, openModal, closeModal)
}