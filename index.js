const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

chk.addEventListener("change", () => {
  document.getElementById("palavra").classList.toggle("darkk");
});

chk.addEventListener("change", () => {
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

for (var contador = 0; contador < 14; contador++) {
  var divb = document.createElement("div");
  document.getElementById("keboard").appendChild(divb);
  divb.setAttribute("id", contador);
  var button = document.createElement("button");
  document.getElementById(contador).appendChild(button);

  button.setAttribute("value", keys[contador]);
  button.setAttribute("class", "btn btn-outline-dark a");
  
  button.setAttribute("id", keys[contador]);
 button.setAttribute("onclick", "getValueBotao(this.id)");
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

var words = [
  "abelha",
  "musculo",
  "piscina",
  "turma da monica",
  "the wichter",
  "friends",
  "Apenas Um Show",
  "turma da monica",
  "Jão Pessoa",
  "github",
  "murder in my mind",
  "land of the fire",
  "Pirates",
  "Lazaro Talarico",
  "Ocean",
  "Terra",
  "Montanha",
];

var contwords = words.length;
var drawnword;
var wordtype;
var wordcount;
var word = [];

function prize() {
  var diff = contwords;
  var rand = Math.random();
  rand = Math.floor(rand * diff);
  return rand;
}

drawnword = words[prize()];

var wordspace = drawnword.split(" ");

wordcount = wordspace.length;

if (wordcount > 1) {
  wordtype = true;
} else {
  wordtype = false;
}

if (wordtype == true) {
  for (var i = 0; i < wordcount; i++) {
    word[i] = wordspace[i].split("");
  }
} else {
  word[0] = wordspace[0].split("");
}

for (var i = 0; i < word.length; i++) {
  for (var j = 0; j < word[i].length; j++) {
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("value", word[i][j]);
    input.setAttribute("id", "input");
    input.style.color = "white";
    document.getElementById("word").appendChild(input);

    
  }
  if (word[i].length > 1) {
    var espaco = document.createElement("div");
    espaco.setAttribute("class", "espaco");
    document.getElementById("word").appendChild(espaco);

  }
}

// document.getElementById("in").innerHTML = resultados

var letter

function getValueBotao(id){
  // letter = document.getElementById("").innerHTML
  var valueButton = id
  alert(valueButton)
 
}