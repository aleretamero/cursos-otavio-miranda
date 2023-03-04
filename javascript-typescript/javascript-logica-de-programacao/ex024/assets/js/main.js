function getTimeFromSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "utc",
  });
}

console.log(getTimeFromSeconds(10));

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let seconds = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(function () {
    seconds++;
    relogio.innerHTML = getTimeFromSeconds(seconds);
  }, 1000);
}

document.addEventListener("click", function (e) {
  const element = e.target;

  if (element.classList.contains("zerar")) {
    relogio.classList.remove("stop");
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    seconds = 0;
  }

  if (element.classList.contains("pausar")) {
    relogio.classList.add("stop");
    clearInterval(timer);
  }

  if (element.classList.contains("iniciar")) {
    relogio.classList.remove("stop");
    clearInterval(timer);
    iniciaRelogio();
  }
});

/*
iniciar.addEventListener("click", function (event) {
  relogio.classList.remove("stop");
  clearInterval(timer);
  iniciaRelogio();
});

pausar.addEventListener("click", function (event) {
  relogio.classList.add("stop");
  clearInterval(timer);
});

zerar.addEventListener("click", function (event) {
  relogio.classList.remove("stop");
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  seconds = 0;
});
*/