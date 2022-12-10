import autobind from "../Decorator/autobind.js"

export class Modal {
    private itemThatOpenModal!: HTMLElement
    private itemThatCloseModal!: HTMLElement
    private modalContainer!: HTMLDivElement

    /**
     * Método responsável por definir os elementos do modal
     * @param modal 
     * @param open 
     * @param close 
     */

    setModal(modal: HTMLDivElement, open: HTMLElement, close: HTMLElement) {
        this.modalContainer = modal 
        this.itemThatOpenModal = open
        this.itemThatCloseModal = close
        this.configure()       
    }

    /**
     * Função responsável por adicionar os eventos aos elementos
     */

    private configure() {
        if(this.modalContainer) {
            this.itemThatOpenModal.addEventListener('click', this.open)
            this.itemThatCloseModal.addEventListener('click', this.close)      
            this.modalContainer.addEventListener('click', this.outsideClick)  
        }
    }

    /**
     * Função responsável por mostrar o modal
     */
    
    @autobind
    private open() {     
        this.modalContainer.classList.add('modal-container--active')
        window.addEventListener('keyup', this.closeByESC) // Ativando evento de keyboard no momento da abertura do modal
    }

    /**
     * Função responsável por ferchar o modal
     */

    @autobind
    private close() {       
        this.modalContainer.classList.remove('modal-container--active')
        window.removeEventListener('keyup', this.closeByESC) // Removendo da stack o evento no momento do fechamento do modal
    }

    /**
     * Função responsável por fechar o modal via tecla ESC
     * @param e 
     */

    @autobind
    private closeByESC(e: { code: string; }) {    
        if(e.code === 'Escape') this.modalContainer.classList.remove('modal-container--active')
    }

    /**
     * Função responsável por fechar o modal caso o click seja fora da área do contéudo do modal
     * @param e 
     */
    
    @autobind
    private outsideClick(e: { target: any; }) {     
       if(this.modalContainer === e.target) this.modalContainer.classList.remove('modal-container--active')        
    }
}