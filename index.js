




const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

chk.addEventListener("change", () => {
  document.getElementById("palavra").classList.toggle("darkk");
});

chk.addEventListener("change", () => {
  console.log(button.classList[1]);
  const buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    button.classList === "btn btn-outline-light"
      ? button.setAttribute("class", "btn btn-outline-dark")
      : button.setAttribute("class", "btn btn-outline-light");
  }
});

const keys = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var letters = keys.length;

var rawdowWords = [
  "abelha",
  "musculo",
  "piscina",
  "turma da monica",
  "the wichter",
  "friends",
  "Apenas Um Show",
  "turma da monica",
  "Jão Pessoa",
  "João e Maria Caçador de Bruxas",
  "github",
  "murder in my mind",
  "land of the fire",
  "Pirates",
  "Lazaro Talarico",
  "Ocean",
  "Terra",
  "Montanha",
];
var PalavraAleatoria =
  rawdowWords[Math.floor(Math.random() * rawdowWords.length)];
console.log(PalavraAleatoria);

for (var contador = 0; contador < 14; contador++) {
  var divb = document.createElement("div");
  document.getElementById("keboard").appendChild(divb);
  divb.setAttribute("id", contador);
  var button = document.createElement("button");
  document.getElementById(contador).appendChild(button);

  button.setAttribute("value", keys[contador]);
  button.setAttribute("class", "btn btn-outline-dark a");

  button.innerHTML = keys[contador];
  button.style.width = "40px";
}

for (var contador = 14; contador < 26; contador++) {
  var divb = document.createElement("div");
  document.getElementById("keboard2").appendChild(divb);
  divb.setAttribute("id", contador);
  var button = document.createElement("button");
  document.getElementById(contador).appendChild(button);

  button.setAttribute("value", keys[contador]);
  button.setAttribute("class", "btn btn-outline-dark a");

  button.innerHTML = keys[contador];
  button.style.width = "40px";
}

document.getElementById("palavra").innerHTML = PalavraAleatoria;



// document.getElementById("in").innerHTML = resultados
