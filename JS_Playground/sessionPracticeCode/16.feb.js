const getUsersName = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        users.forEach(user => {
            console.log(user.name)
        });
    }catch (e){
        console.log(e);
    }
}
// getUsersName();

const getUserAPIWithPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("control enters the promise !!")
        const users = [1, 2, 3];
        const duration = Math.round(Math.random() * 5000);

        setTimeout(() => {
            const random = Math.random();
            if (random >= 0.5) {
                return resolve(users);
            }

            reject({ message: "Something went wrong!" });
        }, duration);

        console.log("Promises are synchronous, as they are use to handle asynchronous operations.");
    });
}

const getUsers = getUserAPIWithPromise();
getUsers.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
})