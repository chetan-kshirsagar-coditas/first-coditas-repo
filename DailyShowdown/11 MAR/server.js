
let localVideo = document.querySelector("video");

navigator.mediaDevices.getUserMedia({video:true})
.then((mediaStream)=>{
    localVideo.srcObject = mediaStream;
})



export class List {
  constructor(list = []) {
    this.list = list;
  }

  append(secondList) {
    return new List([...this.list, ...secondList.list]);
  }

  concat(listOfLists) {
    let result = [...this.list];
    for (const subList of listOfLists.list) {
      result = [...result, ...subList.list];
    }
    return new List(result);
  }

  filter(callback) {
    const result = [];
    for (const item of this.list) {
      if (callback(item)) {
        result.push(item);
      }
    }
    return new List(result);
  }

  map(callback) {
    const result = [];
    for (const item of this.list) {
      result.push(callback(item));
    }
    return new List(result);
  }

  length() {
    let count = 0;
    for (const _ of this.list) {
      count++;
    }
    return count;
  }

  foldl(callback, initialValue) {
    let accumulator = initialValue;
    for (const item of this.list) {
      accumulator = callback(accumulator, item);
    }
    return accumulator;
  }

  foldr(callback, initialValue) {
    let accumulator = initialValue;
    for (let i = this.list.length - 1; i >= 0; i--) {
      accumulator = callback(accumulator, this.list[i]);
    }
    return accumulator;
  }

  reverse() {
    const reversed = [];
    for (let i = this.list.length - 1; i >= 0; i--) {
      reversed.push(this.list[i]);
    }
    return new List(reversed);
  }
}


// foldl(callback, accumulator) {
//     let acc = accumulator;
//     for (let ele of this.values) {
//       acc = callback(acc, ele);
//     }
//     return acc;
//   }

//   foldr(callback, accumulator) {
//     let acc = accumulator;
//     for (let i = this.values.length - 1; i >= 0; i--) {
//       acc = callback(acc, this.values[i]);
//     }
//     return acc;
//   }


//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list = []) {
    this.values = list;
  }

  append(secondList) {
    return new List([...this.values, ...secondList.values]);
  }
  concat(listOfLists) {
    // console.log(listOfLists.values);
    // console.log(listOfLists.values.length);
    // if(listOfLists.values.length === 0) return listOfLists;

    let teamList = [...this.values];
    for (let listObj of listOfLists.values) {
      teamList = [...teamList, ...listObj["values"]]
    }
    
    return {
      "values" : teamList
    }
  }

  filter(callback) {
    const filteredArray = [];
    for (let ele of this.values) {
      if(callback(ele)) filteredArray.push(ele);
    }
    return {
      'values' : filteredArray
    } ;
  }

  map(callback) {
    const modifiedArray = [];
    for (let ele of this.values) {
      modifiedArray.push(callback(ele));
    }
    return {
      'values' : modifiedArray
    };
  }

  length() {
    // throw new Error('Remove this line and implement the function');
    let count = 0;
    for (let l of this.values) {
      count++;
    }
    return count;
  }

  foldl(callback, accumulator = this.values[0]) {
    for (let element of this.values) {
      accumulator = callback(accumulator, element);
    }
    return accumulator;
  }

  foldr(callback, accumulator = this.values[0]) {
    for (let i = this.values.length - 1; i >= 0; i++) {
      accumulator = callback(accumulator, this.values[i]);
    }
    return accumulator;
  }

  reverse() {
    throw new Error('Remove this line and implement the function');
  }
}


