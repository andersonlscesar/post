export class Modal {
    itemThatOpenModal: HTMLElement
    itemThatCloseModal: HTMLElement

    constructor(open: HTMLElement, close: HTMLElement) {
        this.itemThatOpenModal = open 
        this.itemThatCloseModal = close
        console.log(this.itemThatOpenModal, this.itemThatCloseModal)
    }
}