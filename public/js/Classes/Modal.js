// Decorator para realizar a mudança de contexto do this
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
export class Modal {
    constructor(open, close) {
        this.itemThatOpenModal = open;
        this.itemThatCloseModal = close;
        this.modalContainer = document.querySelector('.modal-container');
        this.configure();
    }
    configure() {
        this.itemThatOpenModal.addEventListener('click', this.open);
        this.itemThatCloseModal.addEventListener('click', this.close);
        this.modalContainer.addEventListener('click', this.outsideClick);
    }
    open() {
        this.modalContainer.classList.add('modal-container--active');
        window.addEventListener('keyup', this.closeByESC);
    }
    close() {
        this.modalContainer.classList.remove('modal-container--active');
        window.removeEventListener('keyup', this.closeByESC);
    }
    closeByESC(e) {
        if (e.code === 'Escape')
            this.modalContainer.classList.remove('modal-container--active');
    }
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