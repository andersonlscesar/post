import { AnimationElement } from "../Classes/Animation.js";

export function switchForm() {
    let loginFormSection = <HTMLDivElement> document.querySelector('.section-login-form');
    let cadFormSection = <HTMLDivElement> document.querySelector('.section-cad-form');


    if(loginFormSection && cadFormSection) {
        let animation = new AnimationElement();
        let cadLink = <HTMLAnchorElement> document.querySelector('a[data-js="cad--link"]')!;
        let loginLink = <HTMLAnchorElement> document.querySelector('a[data-js="login--link"]')!;

        cadLink.addEventListener('click', (e) => {
            e.preventDefault();
            animation.addElement(loginFormSection).animateToLeftDirection();
            animation.addElement(cadFormSection).animateFromRightDirection();
        });


        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            animation.addElement(cadFormSection).animateToRightDirection();
            animation.addElement(loginFormSection).animateFromLeftDirection();

        })
    }
}