export const timer = {
    minsPassed: 0,
    secondsPassed: 0,
    timerId: 0,

    startTimer() {
         this.timerId = setInterval(() => {
            this.secondsPassed += 5;
            if (this.secondsPassed == 60) {
                this.minsPassed++;
                this.secondsPassed = 0;
            }
        }, 5000);
    },

    stopTimer() {
        clearInterval(this.timerId);
    },

    resetTimer() {
        this.minsPassed = 0;
        this.secondsPassed = 0;
    },

    getTime() {
        return this.secondsPassed > 10 ? 
            `${this.minsPassed}:0${this.secondsPassed}` :
            `${this.minsPassed}:${this.secondsPassed}`;
    }
}