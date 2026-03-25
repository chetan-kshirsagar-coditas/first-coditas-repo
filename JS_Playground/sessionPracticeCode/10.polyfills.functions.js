// // const items = [
// //     {
// //     name : "item1",
// //     color : "black",
// //     price : 12000
// // },
// //     {
// //     name : "item2",
// //     color : "pink",
// //     price : 25000
// // },
// //     {
// //     name : "item3",
// //     color : "white",
// //     price : 56000
// // }
// // ]
// // const budget = 20000;
// // const requiredColor = "white";
// // const itemsInBudget = items.filter((item) => item.price > budget && item.color === requiredColor);
// // console.log(itemsInBudget);


// const reduce = (list , reducerFn) => {
//     let singleValue;
    
//          singleValue = reducerFn(list);
    
//     return singleValue;
// }

// const reducerFn = ( currentValue , defaultValue) => {
//     if(!previousValue){
//         previousValue = 0;
//     }
//     return previousValue + currentValue;
// }
// console.log(reduce([1,2,3],reducerFn));


// //find sum every

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 40, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));


//every - returns true when all elements are sastifying the condition.
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
// console.log(every(array1, isBelowThreshold));

//every - returns true when all elements are sastifying the condition.
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
// console.log(some(array1,isBelowThreshold));

//find - returns first element which satisfy the condition
const imposterInShip = [1, 2, 3, 4, 5, "6"];
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
// console.log(find(imposterInShip, (e) => typeof e === 'string'));
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
// console.log(findIndex(imposterInShip, (e) => typeof e === 'string'));

//same as the find but iterate on array elements from the last
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

//same as findIndex but this one iterates from backwards.
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

//forEach - apply callback on every array element and changes are in-place. 
const forEach = (array, callbackFn) => {
    for(let index = 0; index < array.length; index++){
        const element = array[index];
        const modifiedElement = callbackFn(element);
        array[index] = modifiedElement;
    }
    return array;
}
// console.log(forEach([1,2,3,4], e => e * 2));

//sort 
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