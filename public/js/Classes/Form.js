export class Form {
    constructor(formElement) {
        this.formElement = formElement;
        this.isPrevented = false;
        this.addSubmitEvent();
    }
    addSubmitEvent() {
        this.formElement.addEventListener('submit', (e) => {
            if (this.isPrevented)
                e.preventDefault();
        });
    }
    prevent(status) {
        this.isPrevented = status;
    }
}
