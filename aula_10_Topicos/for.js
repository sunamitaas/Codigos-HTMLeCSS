

/*01*/


var lin = 4;
var colun = 4;

var matriz1 = [];


for (var i= 0; i<lin; i++){

    matriz1[i] = [];
    for(var j= 0; j<colun; j++){
        matriz1[i][j] = i * colun + j + 1; 

    }
     
}

for (var i = 0; i<lin; i++){
    for(var j = 0; j<colun; j++){
        document.writeln(matriz1[i][j]);
    }
   
}


//02

//criar um botao

var found = false;
for (var i = 0; i < lin; i++) {
    for (var j = 0; j < colun; j++) {
        if (matriz1[i][j] === 10) {
            found = true;
            break;
        }
    }
    if (found) {
        break;
    }
}

if (found) {
    alert("O valor 10 foi encontrado na matriz!");
} else {
    alert("O valor 10 não foi encontrado na matriz.");
}



//03
// Exemplos

var a = 2;
var b = 11;

if (a == b){
    alert("As variaveis a e b são iguais")
}

if (a != b){
    alert("As variaveis a e b não são iguais")
}

/*
if (a <> b){
    alert("As variaveis a e b não são iguais")
}
*/

if (a === b){
    alert("As variaveis a e b são do mesmo tipo")
}

if (a !== b){
    alert("As variaveis a e b não são iguais ou não são do mesmo tipo")
}

if (a < b){
    alert("As variaveis a é menor que b")
}

if (a > b){
    alert("As variaveis a é maior que b")
}

if (a <= b){
    alert("As variaveis a é menor ou igual a b")
}

if (a >= b){
    alert("As variaveis a é maior ou igual a b")
}


//04
// Pesquisar numero

    function pesquisarNumero() {
      var matriz1 = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ];

      var found = false;
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if (matriz1[i][j] === 10) {
            found = true;
            break;
          }
        }
        if (found) {
          break;
        }
      }

      if (found) {
        alert("O valor 10 foi encontrado na matriz!");
      } else {
        alert("O valor 10 não foi encontrado na matriz.");
      }
    }
  