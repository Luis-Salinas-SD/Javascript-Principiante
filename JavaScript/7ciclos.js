//# +++++++++++++++++++++++++++++++++++++++++++++++++++++++ CICLOS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//$ ++++++++++++++++++++++++++++++++++++++++++++++ Ciclo FOR ++++++++++++++++++++++++++++++++++++++++++++++++++++
/* for (var i = 1; i <= 15; i++) {
      alert(i);
} */
//!imprime los multiplos de 7
/* for (let i = 0; i < 50; i++) {
      if ((i % 7) === 0) {
            console.log(i);
      }
} */
//!continue  = ignora la sentencia
//# no imprimir los multiplos de 7
/* for (let i = 0; i < 50; i++) {
      if ((i % 7) === 0) {
            console.log(i); continue
      }
      console.log(i);
} */

/*
for (let i = 0; i < 10; i++) {
      if ((i%5) === 0) {
            continue
      }
      console.log(i);
} 
*/

//! breake =
//# romper el ciclo despues de llegue a 5
/* var n = 0;
for (let i = 0; i < 50; i++) {
      if ((i % 7) === 0) {
            console.log(i);
            n++;
      }
if (n >= 5){
      break
}
} */
//$ ++++++++++++++++++++++++++++++++++++++++++++++ Ciclo DO-WHILE +++++++++++++++++++++++++++++++++++++++++++++++

/* let num =0;
do {
   console.log(num);
  num ++
} while (num <= 5); */

//$ ++++++++++++++++++++++++++++++++++++++++++++++ Ciclo WHILE +++++++++++++++++++++++++++++++++++++++++++++++++
//!Ceunta regresiva del 10 al 0
/*  var numero = 11;
while(numero <=10){
//   alert(numero);
   numero--
console.log(numero);
if (numero === 0){
break;
}
}  */

//!Ejercicio:
/*var edad = prompt("Dime tu edad");
var num = parseInt(edad, 10);
 console.log(num);*/

 //$ +++++++++++++++++++++++++++++++++++++++++++++++++ SWITCH ++++++++++++++++++++++++++++++++++++++++++++++++++
/* var answer = prompt("Dame un numero del 1 al 3")
 switch (answer) {
    case '1':
         alert("Bad Bunny");
         break;
   case '2':
         alert("50 cent");
         break;
   case '3':
      alert("Maluma");
      break

    default:
       alert("tienes que colocar un numero del 1 al 3")
       break;
 } */
