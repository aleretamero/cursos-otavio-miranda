const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return; //verifica se o valor de input é falso, "" é considerado falso.
  criaTarefa(inputTarefa.value);
  limpaInput();
});

inputTarefa.addEventListener("keypress", function (e) {
  //console.log(e) //verifica qual tecla foi precionada por causa do keypress
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();
  }
});

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  criaBotaoApagar(li);
  salvarTarefas();
}

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += "  ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "X";
  // botaoApagar.classList.add('apagar'); add class apagar
  botaoApagar.setAttribute("class", "apagar"); //adiciona qualquer atributo e seu valor
  botaoApagar.setAttribute("title", "apagar está tarefa");
  li.appendChild(botaoApagar);
}

document.addEventListener("click", function (e) {
  const el = e.target;
  //console.log(el); // verifica tudo que está sendo clicado no documento

  if (el.classList.contains("apagar")) {
    el.parentElement.remove(); //apaga o pai do elemento
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();
