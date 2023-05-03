var mysql = require("mysql");
// essa var mysq armazena um requerimento em slq , essa var que vai suportar o

export const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "forca",
});

// var conexao = vai gurdar as inf do banco user password e vai permitir fazer query em sql

export function query() {
  conexao.connect(function (err) {
    if (err) throw err;
    conexao.query(
      "SELECT COUNT(*)  FROM  palavras ",
      function (err, result, fields) {
        if (err) throw err;

        var resultados = result; // retornar valor de pelavras do banco
        // console.log(resultados)
        return resultados
      }
    );
    console.log("conectado");
  });

  conexao.query("SELECT * FROM palavras ", function (err, result, fields) {
    if (err) throw err;
    const palavras = result;
    return palavras
    // console.log(palavras)
  });
}



//isso server para mostrar se a conection vai dar erro ou n