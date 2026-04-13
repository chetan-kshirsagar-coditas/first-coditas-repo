const race = (promises) => {
    if (!promises) {
        return Promise.resolve()
    };

    const resolvedPromises = [];
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            promise.then((res) => resolve(res))
            .catch((err) => reject(err));
        }
    });
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 50, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 10, "two");
});

console.log(await race([promise1, promise2]));