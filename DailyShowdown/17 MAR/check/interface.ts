interface User {
    name: string,
    email: string
}

const tom: User = {
    name: "Tom Holland",
    email: "tom@mcu.com"
}







// //generic
// const hi = <T>(val: T[]):T => {
//     return val[4];
// }

// const arr: User[] = [
//     {
//         name:"chetan",
//         email:"c@c.com"
//     }
// ];
// console.log(hi(arr));
