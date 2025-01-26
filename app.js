// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    if (nombre.trim() === "") {
        alert("No se encontró nada, debes poner un nombre.");
    } else {
        amigos.push(nombre);
        const lista = document.getElementById("listaAmigos");
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = nombre;
        lista.appendChild(nuevoAmigo);

        document.getElementById("amigo").value = "";

    }
    console.log("Lista de amigos:", amigos);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }


    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    const mensaje = `Tu amigo secreto es: ${amigoSecreto}`;
     document.getElementById("mensajeAmigoSecreto").textContent = mensaje;

    console.log(mensaje);
}

