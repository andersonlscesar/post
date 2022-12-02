import { Modal } from "../Classes/Modal.js";
export function modal() {
    // Modal de publicação da postagem
    const closeModal = document.querySelector('.cancel-button');
    const openModal = document.querySelector('.publish');
    const modalPublish = new Modal(openModal, closeModal);
}
//# sourceMappingURL=Modal.js.map