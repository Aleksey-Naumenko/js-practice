export const callbackPrompt = {
    message: 'Enter your number',
    showPrompt() {
        let number =  prompt(this.message);
        console.log(number);
    },
    showDeferredPrompt(milisec) {
        setTimeout(() => this.showPrompt(), milisec);
    },
}