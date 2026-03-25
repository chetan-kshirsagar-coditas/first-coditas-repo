const createElement = () => {
    const subscribers = {};
    return {
        addEventListener : (event, callback) =>{
            subscribers[event] ? subscribers[event].push(callback) : subscribers[event] = [callback];
        },
        onEvent : (event) => subscribers[event].forEach((sub) => sub())
    }
}

const btn = createElement();
btn.addEventListener("click", ()=> console.log("abcd"));
btn.addEventListener("click", ()=> console.log("abcd1"));
btn.addEventListener("click", ()=> console.log("abcd2"));

btn.onEvent("click");