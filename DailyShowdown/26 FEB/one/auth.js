const { db } = require("./db"); 


const login = (username,password) => {
    db();
}

module.exports = {
    login
}