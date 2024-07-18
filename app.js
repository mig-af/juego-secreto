
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento(){
    
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);


    //console.log(numeroSecreto);
    if(intentos == 3){
        asignarTextoElemento("p", "Usaste tres intentos");
        document.getElementById("reiniciar").disabled=false;
    }else{
    
        if(numeroSecreto === numeroUsuario){
            asignarTextoElemento("p", `acertaste el numero ${numeroSecreto} en ${(intentos === 1)? "una vez":`${intentos }veces`}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
        }
        else{
            
            if(numeroSecreto > numeroUsuario){
                asignarTextoElemento("p", " El numero es mayor");
            }else{
                asignarTextoElemento("p", "El numero es menor");
            }
            //limpiar caja
            limpiarCaja();
            intentos ++;
            
        }
    }
    return;
}
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroAleatorio() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //verificar si se alcanzo el numero maximo de numeros sorteados
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearom todos los numeros');
    }

    //Verificar el si el numero generado ya se genero previamente y verificar si esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        //usamos recursividad
        return generarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
      
}
function condicionesIniciales(){
    asignarTextoElemento("h1", "Este es el titulo del juego");
    asignarTextoElemento("p", `indica el numero del 1-${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    
    //deshabilitar boton nuevo juego
    condicionesIniciales();
    
    
    
    console.log(numeroSecreto);
    
}



condicionesIniciales();