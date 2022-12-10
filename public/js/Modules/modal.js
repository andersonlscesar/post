import { Modal } from "../Classes/Modal.js";
export function modal() {
    // Modal de publicação da postagem
    const closeModal = document.querySelector('.cancel-button');
    const openModal = document.querySelector('.publish');
    const containerModal = document.querySelector('.modal-container');
    const modalPublish = new Modal();
    modalPublish.setModal(containerModal, openModal, closeModal);
}
