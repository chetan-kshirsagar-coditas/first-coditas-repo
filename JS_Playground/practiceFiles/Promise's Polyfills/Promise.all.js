const all = (promises) => {

  if (!promises) {
    return Promise.resolve()
  };

  const resolvedPromises = [];

  return new Promise(async (resolve, reject) => {
    
     for (const promise of promises) {
      if(!(promise instanceof Promise)){
        resolvedPromises.push(promise);
        continue;
      }
       await  promise
       .then((res) => {
        // console.log(res);
        resolvedPromises.push(res);
       })
       .catch((err) => reject(err))
    }
    resolve(resolvedPromises);

    // for (const promise of promises) {
    //     if(!promise instanceof Promise){
    //       resolvedPromises.push(promise);
    //       continue;
    //     };
    //     (async function () {
    //       await promise
    //         .then((res) => resolvedPromises.push(res))
    //         .catch(err => {
    //           reject(err);
    //         });
    //     })();
    //   }
    //   console.log("resolve promises: "+resolvedPromises);
    //   resolve(resolvedPromises);
    // });
  })
}


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});
//// Expected output: Array [3, 42, "foo"]
// console.log(await all([promise1, promise2, promise3]).then(res => res));

