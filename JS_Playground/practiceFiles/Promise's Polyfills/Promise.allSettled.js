const allSettled = (promises) => {
    if (!promises) {
        return Promise.resolve()
    };

    const resolvedPromises = [];

    return new Promise(async (resolve, reject) => {

        for (const promise of promises) {
            if (!(promise instanceof Promise)) {
                resolvedPromises.push(promise);
                continue;
            }
             promise
                .then((res) => resolvedPromises.push({response : res, status: "fulfilled"}))
                .catch((err) => resolvedPromises.push({response : err, status: "rejected"}))
        }
        resolve(resolvedPromises);

    })

}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "foo"),
);
const promise3 = new Promise((resolve, reject) =>
    setTimeout(reject, 500, "My height is perfect."),
);


console.log(await allSettled([promise1, promise2, promise3]));