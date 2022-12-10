export class Form {

   private formElement: HTMLFormElement;
   private isPrevented: boolean;

   constructor(formElement: HTMLFormElement) {
        this.formElement = formElement;
        this.isPrevented = false;
        this.addSubmitEvent();
   }

   private addSubmitEvent() {
      this.formElement.addEventListener('submit', (e) => {
         if(this.isPrevented) e.preventDefault();
      })
  }

  prevent(status: boolean) {
      this.isPrevented = status;
  }
}