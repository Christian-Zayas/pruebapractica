
/* 
3.	Tengo en un servidor un archivo de texto que está en minúscula y ocupa 2GB en el disco duro, pero le solicitan que todo el archivo debe ser pasado a mayúsculas, ¿cómo lo haría?

¿Primero que hiciera fuera, conectarme por medios de SSH, ya que es más seguro y, cuando ya este donde se encuentra el archivo que tengo que convertir su contenido a mayúscula, En realidad ahí dos opciones que son?

1) Descargar el archivo y por un medio script de JavaScript, leer su contendido y sobreescribir su contenido a mayúscula. 

2) Instalar Node.js en el servidor o si ya está instalado solo ejecuto el script para hacer la conversión.

ssh root@ y la ip del servidor que nos deseamos conectar, un ejemplo más práctico
 
ssh root@192.168.00.12

*/
/* *******************************************************************  */

const fs = require('fs');

const data = fs.readFileSync('03.txt', 'utf8');
console.log(data.toUpperCase());
fs.writeFileSync('03.txt', data.toUpperCase());



/* *******************************************************************  */
console.log('********************************************************')

/*
    4.	Tiene un arreglo de strings los cuales deben ser filtrados por su longitud mayor a dos y a la vez convertidos a un array de enteros con la longitud de cada string, ¿cómo lo haría? Ejemplo de entrada y salida: [“hola”, “mundo”, “es”, “una”, “prueba”] => [4, 5, 3, 6]

    
*/

/* *******************************************************************  */
const arrayString = ["hola", "mundo", "es", "una", "prueba"];
let arrayNumber = [];

for (let countString of arrayString) {
    if (countString.length > 2) {
        arrayNumber.push(countString.length);
    }
}
console.log(arrayNumber);
/* *******************************************************************  */

/* 
5.	Tiene un arreglo de números, los cuales pueden ser o no repetidos, ¿cómo eliminaría los repetidos? ¿Cómo los ordenaría en forma ascendente? Ejemplo de entrada y salida: [1, 2, 5, 10, 8, 8, 1, 3, 4, 5] => [1, 2, 3, 4, 5, 8, 10] 
*/

/* *******************************************************************  */
console.log('********************************************************')
let arrayNumber2 = [1, 2, 5, 10, 8, 8, 1, 3, 4, 5];

const arrayNumber3 = [...new Set(arrayNumber2.sort((a, b) => a - b))];

console.log(arrayNumber3);
/* *******************************************************************  */
