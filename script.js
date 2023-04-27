
//declaracion de funciones y varaibles
function GEBID(ID){
return document.getElementById(ID);
}

function error(error){
    if(error == "start"){
        window.alert(`porfavor presiona el boton "start" antes de iniciar`);
    }
    if(error == "apuesta"){
        window.alert(`porfavor utiliza numeros en el apartado de "introduzca su apuesta"`);
    }
    if(error == "numero"){
        window.alert(`porfavor utiliza numeros en el apartado de "numero elegido"`);
    }
    if(error == "numeroAlto"){
        window.alert(`haz introducido un numero demasiado grande en el apartado de "numero elegido", porfavor introduce un numero que se encuentre entre 0 y 7`);
        GEBID("Numero").value = "";
    }
}


var reiniciado = false;
var precioDeMesa = 100;
var numeroRan;


// funciones principales

function generadorDeNumero(numero,apuesta, precioDeMesa){
    numeroRan = Math.floor(Math.random()*8);
    if(numero == numeroRan){
        var premio = (apuesta*2)+precioDeMesa;
        GEBID("resultadoEnTexto").innerHTML = `haz acertado el numero era ${numeroRan}, haz ganado $${premio}`
        GEBID("resultado").value = `haz ganado $${premio}`
    }else{
        GEBID("resultadoEnTexto").innerHTML = `haz fallado el numero era ${numeroRan}, haz perdido $${apuesta}`
        GEBID("resultado").value = `haz perdido $${apuesta}`
    }
}

function jugar(event){
    event.preventDefault();
    if(reiniciado){
        var numero = GEBID("Numero").value;
        var apuesta = GEBID("apuesta").value;

        if (!Number.isInteger(parseInt(numero))){
            error("numero");
            return
        }
        if (!Number.isInteger(parseInt(apuesta))){
            error("apuesta");
            return
        }
        if(numero>7){
            error("numeroAlto");
            return
        }
        reiniciado=false;
        numero = parseInt(numero);
        apuesta = parseInt(apuesta);
        generadorDeNumero(numero,apuesta, precioDeMesa);

    }else{
        error("start")
    }
}


function start(event){
    event.preventDefault();
    GEBID("precioDeMesa").value = `$${precioDeMesa}`;
    GEBID("Numero").value = "";
    GEBID("apuesta").value = "";
    GEBID("resultado").value = "";
    GEBID("resultadoEnTexto").innerHTML = "";
    reiniciado = true;
}