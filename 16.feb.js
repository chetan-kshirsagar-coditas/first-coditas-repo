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
getUsersName();