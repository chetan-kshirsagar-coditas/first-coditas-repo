import { addUserForm, addUserModal } from "./dom.js"
import { populateUsers } from "./services.js";
import type { User } from "./types.js";

export const onAddUserBtn = () => {
    addUserModal.style.display = "grid";
}

export const onAddUserSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    const formData = new FormData(addUserForm); 
    const uid = Math.floor(Math.random() * 4000);
    const newUser: Record<string, any> = {
        "uid": uid
    }
    for (const [key, value] of formData.entries()) {
        newUser[key] = value;
    }


    let dbString = localStorage.getItem("users");
    if(!dbString) dbString = "[]";
    let usersData = JSON.parse(dbString);
    usersData.push(newUser);
    localStorage.setItem("users", JSON.stringify(usersData));
    addUserModal.style.display = "none";
    populateUsers();
}

export const onSelectUser = (e: any) => {
    localStorage.setItem("currentSelectedUser", e.target.value);
    populateUsers();
}

export const onLeftUserPanelNameholder = (e: any) => {
    localStorage.setItem("chooseToChatUser", e.target.textContent);
    populateUsers();
}