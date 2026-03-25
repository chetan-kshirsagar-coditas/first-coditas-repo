import dbConnector from "./db.js";


const login = (username,password) => {
    dbConnector.db();
}

 export default {
    login
}