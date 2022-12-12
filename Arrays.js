//Tarea 4 DEWC
//autor: David Renes Tejado 71270642J ®
//version: 1.0
//***************************************************************************/
//***************************** PRIMERA PARTE *******************************/
//***************************************************************************/

function Array() {

      //Pedir a un usuario por un mensaje prompt que introduzca un numero entero

      var N = prompt("Introduce un numero entero");

      if (N % 1 == 0) {
            alert("El numero es entero");

            //Valiéndonos de la variable anterior, pedir que el usuario introduzca N números enteros.

            //Para ello, vamos a crear un array de tamaño N, 
            //y vamos a ir pidiendo al usuario que introduzca un número entero en cada posición del array.

            alert("Introduce " + N + " numeros enteros");
            var numeros = [];

            for (var i = 0; i < N; i++) {
                  numeros[i] = prompt("Introduce un numero entero ");
            }

            //Ordenar el array anterior
            var ordenados = numeros.sort();
            //Mostrar el array ordenado en un alert
            alert("Los numeros introducidos son; " + ordenados);
            //Mostrar el array ordenado en el documento html
            document.getElementById("array").innerHTML = "ARRAY INTRODUCIDO ; " + ordenados;

      } else {
            alert("El numero no es entero");
      }



      //Basándonos en el array introducido por el usuario obtener un array con los elementos pares ordenados,
      // y mostrarlos en el documento html

      var pares = [];

      var pares = numeros.filter(function (numeroPar) {
            return numeroPar % 2 == 0;
      });
      //Mostrar el array ordenado en el documento html
      document.getElementById("pares").innerHTML = "ARRAY DE NUMEROS PARES ; " + pares;

      //Basándonos en el array introducido por el usuario obtener un array con los elementos impares ordenados.
      // y mostrarlos en el documento html

      var impares = [];

      var impares = numeros.filter(function (numeroImpar) {
            return numeroImpar % 2 !== 0;
      });
      //Mostrar el array ordenado en el documento html
      document.getElementById("impares").innerHTML = "ARRAY DE NUMEROS IMPARES ; " + impares;


}
//Llamada a la funcion cuando se carga la pagina
window.onload = Array;


