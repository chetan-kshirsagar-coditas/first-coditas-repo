const select = (selector: string): HTMLElement => {
    const element = document.querySelector(selector) as HTMLElement;
    if(!element) throw "NO SUCH ELEMENT EXISTS!!";
    return element;
} 

export const addUserBtn = select("#add-user-btn");
export const addUserModal = select("#add-user-modal");

export const addUserForm = select("#add-user-form") as HTMLFormElement;

export const header = select("#header");
export const selectUser = select('#select')
export const leftUserPanel = select("#left-user-panel");
export const chattingWithUser = select("#chatting-with-user");


export const createElement = (elementName: string, attachTo?: HTMLElement, classList?: string[], textContent?:string, eventOption?: {type: keyof HTMLElementEventMap, callback: (e: Event) => void}): HTMLElement => {
    const element = document.createElement(elementName);
    if(attachTo) attachTo.appendChild(element);
    if(classList) element.classList.add(...classList);
    if(textContent) element.textContent = textContent;
    if(eventOption) {
        element.addEventListener(eventOption.type, eventOption.callback);
    };
    return element;
}