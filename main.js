let content = document.getElementById("content");

let h2 = document.createElement("h2");
h2.innerText="Part 6 - Exercice 1";

content.appendChild(h2);

//2
let para = document.createElement("p");
para.innerText="lorem ipsum";

content.appendChild(para);

//3
let h1 = document.createElement("h1");
h1.innerText="Le DOM - Création de HTML";

content.prepend(h1)

//4
let contentContent = document.querySelector("#content");

let secondaire = document.getElementById("secondaire");

for (let i = 0; i < contentContent.children.length; i++) {
    let copy = contentContent.children[i].cloneNode(true);
    secondaire.appendChild(copy);
}

//5
let body = document.querySelector('body')
let script = document.querySelector("script");

let div = document.createElement("div");
body.insertBefore(div, script);

div.id="matiere";
document.getElementById("matiere").appendChild(document.createElement("ol"));

let ordonedList = document.querySelector("ol");
ordonedList.appendChild(document.createElement("li")).innerText="appendChild";
ordonedList.appendChild(document.createElement("li")).innerText="createElement";
ordonedList.appendChild(document.createElement("li")).innerText="insertBefore";