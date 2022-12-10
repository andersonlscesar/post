var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import autobind from "../Decorator/autobind.js";
export class PreviewImage {
    constructor(form, input, viewer) {
        this.formElement = form;
        this.inputElement = input;
        this.viewer = viewer;
        this.reader = new FileReader();
        this.startReadingData();
    }
    /**
     * Método responsável por adicionar o evento change ao formulário
     */
    startReadingData() {
        this.formElement.addEventListener('change', this.read);
    }
    /**
     * Método responsável por realizar a leitura do BLob da imagem
     */
    read() {
        const files = this.inputElement.files ? this.inputElement.files[0] : null;
        //Validando a extensão do arquivo
        if (files) {
            if (files.type === 'image/png' || files.type === 'image/jpeg' || files.type === 'image/jpg') {
                this.allStages();
                this.reader.readAsDataURL(files);
            }
            else {
                alert('arquivo não permitido');
            }
        }
    }
    /**
     * Método responsável por disparar os eventos para verificação da passagem de dados
     */
    allStages() {
        this.reader.addEventListener('loadstart', this.handleEvent);
        this.reader.addEventListener('load', this.handleEvent);
        this.reader.addEventListener('progress', this.handleEvent);
    }
    /**
     * Método responsável por verificar os estágios de tranferencias de dados
     */
    handleEvent(e) {
        if (e.type === 'loadstart')
            console.log('Iniciando ...');
        if (e.type === 'progress')
            console.log('Carregando ...');
        if (e.type === 'load')
            this.viewer.src = this.reader.result;
        this.removeListeners();
    }
    /**
     * Método responsável por remover da stack os eventos para evitar memory leak
     */
    removeListeners() {
        this.reader.addEventListener('loadstart', this.handleEvent);
        this.reader.removeEventListener('load', this.handleEvent);
        this.reader.addEventListener('progress', this.handleEvent);
    }
}
__decorate([
    autobind
], PreviewImage.prototype, "read", null);
__decorate([
    autobind
], PreviewImage.prototype, "allStages", null);
__decorate([
    autobind
], PreviewImage.prototype, "handleEvent", null);
__decorate([
    autobind
], PreviewImage.prototype, "removeListeners", null);
