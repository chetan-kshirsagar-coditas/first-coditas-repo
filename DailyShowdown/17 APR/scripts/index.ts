import { addUserBtn, addUserForm, selectUser } from "./dom.js";
import { onAddUserBtn, onAddUserSubmit, onSelectUser } from "./event-listeners.js";
import { populateHeader, populateUsers } from "./services.js";

populateUsers();

addUserBtn.addEventListener("click", onAddUserBtn);

addUserForm.addEventListener("submit", onAddUserSubmit);

selectUser.addEventListener("change", onSelectUser);