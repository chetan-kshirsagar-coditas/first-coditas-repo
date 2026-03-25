```
const callLimiter = (fn, limit = 2) => {
    let callLimit = 0;
    let threshold = limit;

    //not this will reset limit after every 2 seconds and work fine

    setInterval(() => {
        callLimit = 0;
    }, 2000);

    return () => {
        if (callLimit >= threshold) {
            callLimit = 0;
            console.error("LIMIT REACHED!!");
            return;
        }
        //setting callLimit = 0; everytime we call api. It should be outside the function so work globally.

        // setInterval(() => {
        //     callLimit = 0
        // }, 2000);

        fn();
        callLimit++;
    }
}
const getData = () => {
    console.log("~~data~~");
}
const tester = callLimiter(getData);

tester(); //data
tester(); //data
tester(); //Limit Reached !!
```