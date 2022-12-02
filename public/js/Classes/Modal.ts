// Decorator para realizar a mudança de contexto do this

function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      }
    };
    return adjDescriptor;
  }

export class Modal {
    private itemThatOpenModal: HTMLElement
    private itemThatCloseModal: HTMLElement
    private modalContainer: HTMLDivElement

    constructor(open: HTMLElement, close: HTMLElement) {
        this.itemThatOpenModal = open 
        this.itemThatCloseModal = close
        this.modalContainer = <HTMLDivElement> document.querySelector('.modal-container')
        this.configure()
    }

    private configure() {
        this.itemThatOpenModal.addEventListener('click', this.open)
        this.itemThatCloseModal.addEventListener('click', this.close)      
        this.modalContainer.addEventListener('click', this.outsideClick)  
    }
    
    @autobind
    private open() {
        this.modalContainer.classList.add('modal-container--active')
        window.addEventListener('keyup', this.closeByESC)
    }

    @autobind
    private close() {
        this.modalContainer.classList.remove('modal-container--active')
        window.removeEventListener('keyup', this.closeByESC)
    }

    @autobind
    private closeByESC(e: { code: string; }) {
       if(e.code === 'Escape') this.modalContainer.classList.remove('modal-container--active')
    }
    
    @autobind
    private outsideClick(e: { target: any; }) {      
        if(this.modalContainer === e.target) this.modalContainer.classList.remove('modal-container--active')
    }
}