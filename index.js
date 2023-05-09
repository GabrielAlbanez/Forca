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


  var contwords = words.length
var drawnword
var wordtype
var wordcount
var word = []


  function prize(){
    
    var diff = contwords
    var rand = Math.random()
    rand = Math.floor(rand * diff)
    return rand

}

drawnword = words[prize()]

console.log(drawnword)

var wordspace = drawnword.split(' ')

wordcount = wordspace.length

console.log(wordcount)

if (wordcount > 1){
    wordtype = true
}
else {
    wordtype = false
}


if (wordtype == true){
    for(var i = 0; i < wordcount; i++){
        word[i] = wordspace[i].split('')
        console.log(wordspace[i])
        console.log(word[i])
    }
} else {
    word[0] = wordspace[0].split('')
}

for(var i=0; i < word.length; i++){
    for (var j=0; j < word[i].length; j++){
        var input = document.createElement('input')
        input.setAttribute('type','text')
        input.setAttribute('class', 'form-control')
        document.getElementById('word').appendChild(input)
   }
}










// document.getElementById("in").innerHTML = resultados
