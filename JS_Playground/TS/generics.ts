interface CustomResponse<T>{
    data : T,
    code : number,
    status : string
}

interface Product{
    color : "Black" | "White" | "Neon",
    price : number
}

interface User{
    name : string,
    age : number
}

function getData<T>() : CustomResponse<T>  {
    return {
        data :{} as T,
        code : 404,
        status : "this is generic !!"
    }
}

getData<Product>().data.price;
getData<User>().data.name;

console.log("TRANSPILEDDDD")