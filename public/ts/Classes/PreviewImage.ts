import autobind from "../Decorator/autobind.js"

export class PreviewImage {

    private formElement: HTMLFormElement
    private inputElement: HTMLInputElement
    private viewer: HTMLImageElement
    private reader: FileReader

    constructor(form: HTMLFormElement, input: HTMLInputElement, viewer: HTMLImageElement) {
        this.formElement = form    
        this.inputElement = input 
        this.viewer = viewer
        this.reader = new FileReader()
        this.startReadingData()  
    }

    /**
     * Método responsável por adicionar o evento change ao formulário
     */

    private startReadingData() {
        this.formElement.addEventListener('change', this.read)
    }

    /**
     * Método responsável por realizar a leitura do BLob da imagem
     */

    @autobind
    private read() {
        const files = this.inputElement.files ? this.inputElement.files[0] : null
        //Validando a extensão do arquivo
        if(files) {
            if(files.type === 'image/png' || files.type === 'image/jpeg' || files.type === 'image/jpg') {
                this.allStages()
                this.reader.readAsDataURL(<Blob> files)
            } else {
                alert('arquivo não permitido')
            }
        }
    } 

    /**
     * Método responsável por disparar os eventos para verificação da passagem de dados
     */

    @autobind
    private allStages() {
        this.reader.addEventListener('loadstart', this.handleEvent)
        this.reader.addEventListener('load', this.handleEvent)
        this.reader.addEventListener('progress', this.handleEvent)
    }

    /**
     * Método responsável por verificar os estágios de tranferencias de dados 
     */

    @autobind
    private handleEvent(e: { type: string }) {   
        if(e.type === 'loadstart') console.log('Iniciando ...')
        if(e.type === 'progress') console.log('Carregando ...')
        if(e.type === 'load') this.viewer.src = <string> this.reader.result
    
        this.removeListeners()
    }

    /**
     * Método responsável por remover da stack os eventos para evitar memory leak
     */
    
    @autobind
    private removeListeners() {
        this.reader.addEventListener('loadstart', this.handleEvent)
        this.reader.removeEventListener('load', this.handleEvent)
        this.reader.addEventListener('progress', this.handleEvent)
    }


}