//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Juego del número secreto";

//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "Indica un número del 1 al 10";

//function intentoDeUsuario() {
    //Acción, en el html se declaró nada más
    //alert("Click desde el botón");
//}

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(numeroDeUsuario);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario === numeroSecreto);

    //console.log(intentos);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
        } else {
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector("#valorUsuario");
    //valorCaja = "";
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los núemros posibles");
    } else {
        //Si el número generado está en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //Recursividad
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento(`p`,`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();

    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();

    //Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();

