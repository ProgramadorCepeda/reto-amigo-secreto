let arrayAmigos = [];
let resultado = document.getElementById("resultado");
let listaDesplegable = document.getElementById("listaAmigos");


function textoInicial(){ //Reinicia el texto del input
    let amigo = document.getElementById("amigo");
    amigo.value = "";
    
}

function resetListaDesplegable(){ //Reinicia la lista desplegable
    listaDesplegable.innerHTML = "";
    arrayAmigos = [];
    
}

function resetSorteo(){
    if(resultado.innerHTML != ""){
        resultado.innerHTML = "";
    }
}

function sortearAmigo(){ //Esta funcion hace el sorteo de los amigos
    if(arrayAmigos[0] != null){
        let seleccionado = arrayAmigos[Math.floor(Math.random()*arrayAmigos.length)];
        let li = document.createElement("li");
        li.innerHTML = seleccionado;
        resultado.appendChild(li);
        textoInicial();
        resetListaDesplegable();
    
    } else{
        alert('No hay personas con las cuales sortear, por favor ingresa personas');
    }
 
    
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
    resetSorteo();
    let amigo = document.getElementById("amigo").value;
        if (amigo == ''){
            alert('Digite un nombre valido por favor');
        } else{
            arrayAmigos.push(amigo);
            textoInicial();
            amigo.value = "";
            amigo.innerHTML = '';   
            console.log(arrayAmigos);
            mostrarLista(arrayAmigos);
        }
    
}
