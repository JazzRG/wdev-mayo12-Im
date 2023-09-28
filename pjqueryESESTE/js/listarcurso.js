let apiBase = "https://paginas-web-cr.com/ApiPHP/apis/";
let apiConsultar = "ListaCurso.php";
let apiEliminar = "BorrarCursos.php";
let apiEditar = "ActualizarCursos.php";

const myModalEliminar = new bootstrap.Modal($("#myModalEliminar"));
const myModalEditar = new bootstrap.Modal($("#myModalEditar"));
const modalSuccess = new bootstrap.Modal($("#modalSuccess"));

let tablaResultado = document.querySelector("#tablaresultado");

function consultardatos() {
  //fetch sirve para extraer, insertar modificar, eliminar consultardatos,
  let apiUrl = apiBase + apiConsultar;



  $.ajax({
    url: apiUrl,
    type: "GET",
    success: function (datosRespuesta) {
      console.log("datosRespuesta:", datosRespuesta);
      ajustardatostabla(datosRespuesta.data);
    },
    error: function (error) {
      console.log(error);
    },
  });
}

function ajustardatostabla(datos) {
  console.log("datos" + datos);
  for (const objetoindividual of datos) {
    tablaResultado.innerHTML += `         
        <thead class="table-light">
        <caption>Lista de datos</caption>
        <tr>
          <td>${objetoindividual.id}Id</td>
          <td>${objetoindividual.nombre}</td>
          <td>${objetoindividual.descripcion}</td>
          <td>${objetoindividual.tiempo}</td>
          <td>${objetoindividual.usuario}</td>
          <td>
          <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.nombre}','${objetoindividual.descripcion}','${objetoindividual.tiempo}')">Editar</a>
          
          <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
          </td>
        </tr>
        `;
  }
}

function mostrarModal(id) {
  eliminandodato(id);

  myModalEliminar.show();
}

function eliminandodato(id) {
  let datosEnviar = {
    id: id,
  };

  apiurl = apiBase + apiEliminar;
  fetch(apiurl, {
    method: "POST",
    body: JSON.stringify(datosEnviar),
  })
    .then((estructura) => estructura.json())
    .then((datosrespuesta) => {
      completeDelete();
    })
    .catch(console.log);
}

function completeDelete() {
  myModalEliminar.hide();
  tablaResultado.innerHTML = ``;
  consultardatos();
}

function mostrarEditarModal(id, nombre, descripcion, tiempo) {
  document.getElementById("id").value = id;
  document.getElementById("nombre").value = nombre;
  document.getElementById("descripcion").value = descripcion;
  document.getElementById("tiempo").value = tiempo;
  myModalEditar.show();
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  //alert('salvadndo');

  let datosEnviar = {
    id: document.getElementById("id").value,
    nombre: document.getElementById("nombre").value,
    descripcion: document.getElementById("descripcion").value,
    tiempo: document.getElementById("tiempo").value,
    usuario: "Jaz y Bran",
  };

  apiurl = apiBase + apiEditar;
  fetch(apiurl, {
    method: "POST",
    body: JSON.stringify(datosEnviar),
  })
    .then((estructura) => estructura.json())
    .then((datosrespuesta) => {
      alert("Salvado");
      // modalSuccess.show()
      completeInsert();
    })
    .catch(console.log);
});

function completeInsert() {}

consultardatos();
