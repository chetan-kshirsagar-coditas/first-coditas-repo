import { chattingWithUser, createElement, header, leftUserPanel, selectUser } from "./dom.js";
import { onLeftUserPanelNameholder, onSelectUser } from "./event-listeners.js";
import type { User } from "./types.js";

export const populateUsers = () => {
    leftUserPanel.textContent = "";
    const usersData: User[] = JSON.parse(localStorage.getItem("users")!);
    if (!usersData) return;
    for (const user of usersData) {

        const currentSelectedUser = localStorage.getItem("currentSelectedUser");
        if (currentSelectedUser) {
            if (user.name === currentSelectedUser) continue;
        }

        const div = createElement("div", leftUserPanel, ["left-user-panel-nameholder"],'', {type: "click", callback: onLeftUserPanelNameholder} );
        createElement("img", div, ["profile-img"])
            .setAttribute("src", `${user.profile_photo_link}`);

        createElement("span", div, ["left-user-panel-nameholder"], `${user.name}`);
    }
    populateHeader();
}

export const populateHeader = () => {
    const usersData: User[] = JSON.parse(localStorage.getItem("users")!);
    selectUser.textContent = "";
    const currentSelectedUser = localStorage.getItem("currentSelectedUser");
    const chooseToChatUser = localStorage.getItem("chooseToChatUser");

    if (currentSelectedUser) {
        createElement("option", selectUser, ["option"], `${currentSelectedUser}`)
    } else {
        createElement("option", selectUser, ["option"], `Choose user`)
    }

    if(chooseToChatUser) {
        chattingWithUser.textContent = `Chat: ${chooseToChatUser}`;
    }else{
        chattingWithUser.textContent = "Chat: select from left panel"
    };

    for (const user of usersData) {
        createElement("option", selectUser, ["option"], `${user.name}`)
    }
}