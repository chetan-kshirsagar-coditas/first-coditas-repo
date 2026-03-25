

const users = [{
    user1 : {
        name : "Chetan Kshirsagar"
    },
    user2 : {
        name : "Chetan Kshirsagar"
    },
    user3 : {
        name : "Chetan Kshirsagar"
    }
}]
const maxTime = 30000;
const getUsers = (maxTime) => {
    
        setTimeout(()=>{
            return users;
        }, Math.floor(Math.random() * maxTime));
    
}
// console.log(getUsers());
