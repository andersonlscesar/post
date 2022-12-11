var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import autobind from "../Decorator/autobind.js";
export class Modal {
    /**
     * Método responsável por definir os elementos do modal
     * @param modal
     * @param open
     * @param close
     */
    setModal(modal, open, close) {
        this.modalContainer = modal;
        this.itemThatOpenModal = open;
        this.itemThatCloseModal = close;
        this.configure();
    }
    /**
     * Função responsável por adicionar os eventos aos elementos
     */
    configure() {
        if (this.modalContainer) {
            this.itemThatOpenModal.addEventListener('click', this.open);
            this.itemThatCloseModal.addEventListener('click', this.close);
            this.modalContainer.addEventListener('click', this.outsideClick);
        }
    }
    /**
     * Função responsável por mostrar o modal
     */
    open() {
        this.modalContainer.classList.add('modal-container--active');
        window.addEventListener('keyup', this.closeByESC); // Ativando evento de keyboard no momento da abertura do modal
    }
    /**
     * Função responsável por ferchar o modal
     */
    close() {
        this.modalContainer.classList.remove('modal-container--active');
        window.removeEventListener('keyup', this.closeByESC); // Removendo da stack o evento no momento do fechamento do modal
    }
    /**
     * Função responsável por fechar o modal via tecla ESC
     * @param e
     */
    closeByESC(e) {
        if (e.code === 'Escape')
            this.modalContainer.classList.remove('modal-container--active');
    }
    /**
     * Função responsável por fechar o modal caso o click seja fora da área do contéudo do modal
     * @param e
     */
    outsideClick(e) {
        if (this.modalContainer === e.target)
            this.modalContainer.classList.remove('modal-container--active');
    }
}
__decorate([
    autobind
], Modal.prototype, "open", null);
__decorate([
    autobind
], Modal.prototype, "close", null);
__decorate([
    autobind
], Modal.prototype, "closeByESC", null);
__decorate([
    autobind
], Modal.prototype, "outsideClick", null);
//# sourceMappingURL=Modal.js.map