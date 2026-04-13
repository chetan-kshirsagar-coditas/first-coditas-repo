const mainContainer = document.querySelector("main") as HTMLElement;

type User = {
    name: string
}
const fetchUserNames = async (): Promise<Array<string>> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data.map((user: User) => user["name"]);
}

const displayNames = async () => {
    const userNames = await fetchUserNames();
    for(const name of userNames){

        const button = document.createElement("button");
        const img = document.createElement("img");
        const div = document.createElement("div");

        div.appendChild(img)
        div.appendChild(button)
        button.textContent = name;
        img.setAttribute("src", "https://picsum.photos/200");

        mainContainer.append(div);
    }
}

displayNames();