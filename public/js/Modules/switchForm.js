import { AnimationElement } from "../Classes/Animation.js";
export function switchForm() {
    let loginFormSection = document.querySelector('.section-login-form');
    let cadFormSection = document.querySelector('.section-cad-form');
    if (loginFormSection && cadFormSection) {
        let animation = new AnimationElement();
        let cadLink = document.querySelector('a[data-js="cad--link"]');
        let loginLink = document.querySelector('a[data-js="login--link"]');
        cadLink.addEventListener('click', (e) => {
            e.preventDefault();
            animation.addElement(loginFormSection).animateToLeftDirection();
            animation.addElement(cadFormSection).animateFromRightDirection();
        });
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            animation.addElement(cadFormSection).animateToRightDirection();
            animation.addElement(loginFormSection).animateFromLeftDirection();
        });
    }
}
//# sourceMappingURL=switchForm.js.map