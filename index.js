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
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
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
  button.setAttribute("id", keys[contador]);
  button.setAttribute("onclick", "getValueBotao(this.id)");

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
  "apenas um show",
  "turma da monica",
  "jao pessoa",
  "github",
  "murder in my mind",
  "land of the fire",
  "pirates",
  "lazaro talarico",
  "ocean",
  "terra",
  "montanha",
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

var quantidadeLetras = 0;

for (var i = 0; i < word.length; i++) {
  for (var j = 0; j < word[i].length; j++) {
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("value", word[i][j]);
    input.setAttribute("id", quantidadeLetras);
    input.style.color = "white";
    document.getElementById("word").appendChild(input);
    quantidadeLetras += 1;
  }
  if (word[i].length > 1) {
    var espaco = document.createElement("div");
    espaco.setAttribute("class", "espaco");
    document.getElementById("word").appendChild(espaco);
  }
}

// document.getElementById("in").innerHTML = resultados

function getValueBotao(id) {
  // letter = document.getElementById("").innerHTML
  var valueButton = id;
  document.getElementById(id).disabled = true
  verificar(valueButton);
  verificarErros();
  verficarClick()

}

var quatidadeErros = 0;
var quantidadeTentativas = 6
var quantidadeCliks = 0;    


function verificar(valueButton) {
  var quantidadeAcertos = 0;
  for (var i = 0; i <= quantidadeLetras; i++) {
    if (valueButton == document.getElementById(i).value) {
      document.getElementById(i).style.color = "black";
       quantidadeAcertos = quantidadeAcertos + 1
       quantidadeCliks = quantidadeCliks + 1
    } 
    }
    if(quantidadeAcertos == 0) {
      quatidadeErros += 1 
      quantidadeCliks = quantidadeCliks + 1
    }
    
    // if(quantidadeErros >  1){
    //   document.getElementById("head2").style.visibility = "visible"
    // }
    // else if(quantidadeErros)
  }

  function verificarErros(){
    for(var i=1 ;i  <= quatidadeErros;i++){
      document.getElementById("p"+ i).style.visibility = "visible"
    } 
    console.log(quatidadeErros)
    if(quatidadeErros == 6){
     alert("Game Over")
     location.reload();
    }
  
  }

  
 function verficarClick(){
  if(quantidadeCliks > 1){
    quantidadeCliks = 0
    // for(var i=0; i <= 25;i++){
    //   document.getElementById(i)
    // }
  
  }
 }

