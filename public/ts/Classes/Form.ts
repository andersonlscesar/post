export class Form {

   private formElement: HTMLFormElement;

   constructor(formElement: HTMLFormElement) {
        this.formElement = formElement;
   }

   get getFormElement(): HTMLFormElement {
      return this.formElement;
   }
}