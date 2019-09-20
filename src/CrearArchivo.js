const fs = require("fs");

fs.writeFile(
  "./texto.txt",
  "Hacemos la prueba de Arquitectura Web - Esta es mi primer prueba de la lectura de un archivo desde node.js para la materia",
  error => {
    if (error) console.log(error);
    else console.log("El archivo texto.txt fue creado");
  }
);

fs.writeFile("./archivo1.txt", "línea 1\nLínea 2", error => {
  if (error) console.log(error);
  else console.log("El archivo 1.txt fue creado");
});

console.log("última línea del programa");
