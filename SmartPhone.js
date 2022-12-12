//Tarea 4 DEWC
//autor: David Renes Tejado 71270642J ®
//version: 1.0

//***************************************************************************/
//***************************** SEGUNDA PARTE *******************************/
//***************************************************************************/

//Creamos una funcion constructora llamada Smartphone 
function Smartphone(marca, modelo, color, tamanio) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.tamanio = tamanio;
      this.instalarAplicacion = function (apli) {
            return alert("Aplicación " + apli + " instalada con con éxito en smartphone " + marca + " " + modelo +
                  " de tamaño " + tamanio + "pulgadas");
      }
      this.enviarCorreo = function (mensa) {
            return alert("Mensaje: " + mensa + " enviado con éxito");
      }
      this.llamar = function (num) {
            return alert("Llamando al " + num + "...desde mi smartphone con tamaño " + tamanio + "pulgadas");
      }
      this.getObtenDatosSmartPhone = function () {
            return "Marca: " + this.marca + "\nModelo: " + this.modelo +
                  " \nColor: " + this.color + " \nTamaño: " + this.tamanio;
      }

}



//Usamos el patron de diseño prototype para añadir un metodo a la clase Smartphone
Smartphone.prototype.getObtenDatosSmartPhone = function () {
      alert("Marca: " + this.marca + " <br>Modelo: " + this.modelo +
            " <br>Color: " + this.color + " <br>Tamaño: " + this.tamanio);


}

//Creamos un objeto llamado smartphoneDavid
var smartphoneDavid = new Smartphone("Xiaomi", "Mi A2 Lite", "Blanco", "5.84\"");
//Invocamos a sus metodos
smartphoneDavid.instalarAplicacion("Whatsapp");
smartphoneDavid.enviarCorreo("Hola, ¿cómo estás? ");
smartphoneDavid.llamar("666666666");

alert(smartphoneDavid.getObtenDatosSmartPhone());

