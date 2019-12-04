import { timer } from './index';

it ('sould get the beginning of timer', () => {
    let result = timer.getTime();
    expect(result).toEqual("0:00");
});

// it ('should get "0:05" after 5sec of working', () => {
//     timer.startTimer();
//     setTimeout(() => {
//         timer.stopTimer();
//     }, 6000);
//     let result = timer.getTime();
//     expect(result).toEqual("0:05");
// });