export class Loading {
    constructor() {
        this.loadingContainer = document.querySelector('.loader');
        this.removeLoading();
    }
    /**
     * Remove a tela de carregamento depois de alguns segundos
     */
    removeLoading() {
        if (this.loadingContainer) {
            setTimeout(() => {
                this.loadingContainer.classList.add('loader--remove');
            }, 2500);
        }
    }
}
//# sourceMappingURL=Loading.js.map