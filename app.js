let arrayAmigos = [];
let resultado = document.getElementById("resultado");
function textosIniciales(){

}

function mostrarLista(arrayAmigos){
    let listaAmigos = document.getElementById("listaAmigos").value;
    resultado.innerHTML(listaAmigos);
}
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    arrayAmigos.push(amigo);
    console.log(arrayAmigos);
    mostrarLista(arrayAmigos);
}
console.log(arrayAmigos)