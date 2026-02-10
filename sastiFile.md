reduce()

```
const reduce = ( array , callbackFn, defaultAccumulator = array[0]) => {
    let callbackAccumulator = defaultAccumulator;
    for(let index = 0; index < array.length; index++){
        const element = array[index];
        const returnedValue = callbackFn(callbackAccumulator, array[index]);
        callbackAccumulator = returnedValue;
    }
    const finalReducedValue = callbackAccumulator;
    return finalReducedValue;
}
console.log(reduce([1,2,3,4],(acc, ele) => acc + ele,0));
```
sort()

```
const sort = (array, callbackFn) => {
    for(let index = 0; index < array.length; index++){
        for(let jindex = index + 1; jindex < array.length; jindex++){
            const returnedValue = callbackFn(array[index], array[jindex]);
            if(returnedValue > 0){
                let temp = array[index];
                array[index] = array[jindex];
                array[jindex] = temp;
            }
        }
    }
    return array;
}

console.log(sort([4,4,2,1,2,5,4,4,42,22], (a,b) => a - b ));
```

forEach()

```
const forEach = (array, callbackFn) => {
    for(let index = 0; index < array.length; index++){
        const element = array[index];
        const modifiedElement = callbackFn(element);
        array[index] = modifiedElement;
    }
    return array;
}
```
every()

```
const every = (array, callbackFn) => {
    let isTrue = true;
    for(let index = 0; index < array.length; index++){
        const element = array[index];
        if( !callbackFn(element) ){
            isTrue = false;
            break
        }
    }
    return isTrue;
}
```

some()

```
const some = (array, callbackFn) => {
    let isTrue = false;
    for(let index = 0; index < array.length; index++){
        const element = array[index];
        if( callbackFn(element) ){
            isTrue = true;
            break
        }
    }
    return isTrue;
}
```
find()

```
const find = (array, callbackFn) => {
     for(let index = 0; index < array.length; index++){
        const element = array[index];
        const returnedValue = callbackFn(element);
        if(returnedValue){
            return element; //returns the element
        }
     }
     return undefined;
}
```

findIndex()

```
const findIndex = (array, callbackFn) => {
     for(let index = 0; index < array.length; index++){
        const element = array[index];
        const returnedValue = callbackFn(element);
        if(returnedValue){
            return index; //returns the index
        }
     }
     return -1;
}
```

findLast()
```
const findLast = (array, callbackFn) => {
     for(let index = array.length - 1; index >= 0; index--){
        const element = array[index];
        const returnedValue = callbackFn(element);
        if(returnedValue){
            return element; 
        }
     }
     return undefined;
}
```

findLastIndex()

```
const findLastIndex = (array, callbackFn) => {
     for(let index = array.length - 1; index >= 0; index--){
        const element = array[index];
        const returnedValue = callbackFn(element);
        if(returnedValue){
            return index; 
        }
     }
     return undefined;
}
```
