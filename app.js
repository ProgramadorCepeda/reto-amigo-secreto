let arrayAmigos = [];
let resultado = document.getElementById("resultado");
let listaDesplegable = document.getElementById("listaAmigos");


function textosIniciales(){

}

function sortearAmigo(){ //Esta funcion hace el sorteo de los amigos
    let seleccionado = arrayAmigos[Math.floor(Math.random()*arrayAmigos.length)];
    let li = document.createElement("li");
    li.innerHTML = seleccionado;
    resultado.appendChild(li);
    
    
}

function mostrarLista(arrayAmigos){ //Esta funcion muestra la lista del array actualizando el texto
    listaDesplegable.innerHTML = "";
    for (let i = 0; i<arrayAmigos.length; i++){
        let elemento = arrayAmigos[i]
        let li = document.createElement("li");
        li.innerHTML = elemento;
        listaDesplegable.appendChild(li);
    }
    
}

function agregarAmigo(){  //Esta funcion añade al amigo al array
    let amigo = document.getElementById("amigo").value;
    if (amigo == ''){
        alert('Digite un nombre valido por favor');
    } else{
        arrayAmigos.push(amigo);
        amigo.value = '';
        amigo.innerHTML = '';   
        console.log(arrayAmigos);
    }
    mostrarLista(arrayAmigos);
}
