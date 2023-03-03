// seleciona a classe content
const content = document.querySelector(".content");
// seleciona todas as tags <p> do content
const paragraphs = content.querySelectorAll("p");

// seleciona todos os estilos do body
const styleBody = getComputedStyle(document.body);
// seleciona o background color dos estilos adquiridos antes
const backgroundColorBody = styleBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of paragraphs) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "#fff";
  p.style.textAlign = "center";
  p.style.margin = "5px 10px";
  p.style.padding = "10px";
  p.style.borderRadius = "10px";
}
