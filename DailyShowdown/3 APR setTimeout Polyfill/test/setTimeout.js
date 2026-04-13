
// const mySetTimeout = (callback, delay) => {
//     const currentTime = Date.now();
    
//     const checkDelayDone = () => {
//         if ((currentTime + delay) <= Date.now()) {
//             callback();
//         }else{
//             requestAnimationFrame(checkDelayDone);
//         }
//     }
//     // requestAnimationFrame(checkDelayDone);
//     checkDelayDone();

//     console.log("is it Blocking..😥");
// }

// const mySetTimeout = (callback, delay) => {
//     const currentTime = Date.now();
    
//     const checkDelayDone = () => {
//         if ((currentTime + delay) <= Date.now()) {
//             callback();
//         }else{
//            process.nextTick(checkDelayDone);
//         }
//     }
//     checkDelayDone();
//     console.log("is it Blocking..😥");
// }

const mySetTimeout = (callback, delay) => {
    const currentTime = Date.now();
    
    const checkDelayDone = () => {
        if ((currentTime + delay) <= Date.now()) {
            callback();
        }else{
           queueMicrotask(checkDelayDone);
        }
    }
    queueMicrotask(checkDelayDone);
    console.log("is it Blocking..😥");
}


const fn = () => {
    console.log("npm i 😁😊");
}
const delay = 3000;

mySetTimeout(fn, delay);
console.log("After Timeout Statement 😎");



