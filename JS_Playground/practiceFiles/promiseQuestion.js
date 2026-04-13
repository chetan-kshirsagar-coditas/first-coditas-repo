console.log("Start !");

setTimeout(() => { console.log("Timeout") }, 0);

Promise.resolve(2)
.then(() => {
    console.log("Promise 1");
    return Promise.resolve(2);
})
.then(() => {
    console.log("Promise 2")
})

const hello = async () => {
    console.log("Async 1");
    // await fetch("https://api.agify.io/?name=meelad"); //5 seconds
    // await null; //5 seconds
    console.log("Async 2");
};
hello();

console.log("End !");



function anything(){
    return {
        obj:"hello"
    }
}
anything();