export class Form {
   [x: string]: any;

   private formElement: HTMLFormElement;

   constructor(formElement: HTMLFormElement) {
        this.formElement = formElement;
   }

   get getFormElement(): HTMLFormElement {
      return this.formElement;
   }
}