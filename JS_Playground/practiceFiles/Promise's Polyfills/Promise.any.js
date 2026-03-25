const any = (promises) => {
    if (!promises) {
        return Promise.resolve()
    };

    const allPromises = [];

    return new Promise((resolve, reject) => {

        for (let index in promises) {
            const promise = promises[index];
            promise
                .then((res) => {
                    allPromises[index] = {res, rejected: false};
                    resolve(res);
                })
                .catch((err) => allPromises[index] = {err, rejected: true})
                .finally(() => {
                    if(allPromises.length === promises.length && allPromises.every(p => p.rejected)) {
                        reject(allPromises);
                    }
                })
        }
    });
}

const promise1 = Promise.reject("promise 1 rejected");
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 10, "quick"));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 5, "slow"));


console.log(await any([promise1, promise2, promise3]).then((value) => console.log(value)).catch((err) => err));