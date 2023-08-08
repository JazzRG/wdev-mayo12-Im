(async () => {
  // https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php

  // Pedirle al servidor la info
  let res = await fetch(
    "https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php"
  );

  // Descodificar el JSON
  let data = await res.json();

  console.log("data", data);

  console.log("data.code", data.code);
  console.log("data.data", data.data);
  console.log("data.message", data.message);
  console.log("primerapellido", data.data[0].apellidomaterno);
})();

/*
  (async () => {
    ...
  })();

  ^-- es lo mismo que escribir

  async function miFuncion() {
    ...
  }

  miFuncion();

  IMPORTANTE! `await` SOLO se puede usar dentro de una
  función marcada con `async`
*/