function getnumber(numero){
    var parcial=document.getElementById("output").value;
    numero=String(numero);
    parcial=String(parcial);
    if(parcial != 0){
        var res = parcial.concat(numero);
    }
    if(parcial == 0){
        var res = numero;
    }
    document.getElementById("output").value = res; 
}
function clearout(){
    var res=0;
    document.getElementById("output").value = res; 
    document.getElementById("dato").value = "";
    document.getElementById("operacion").value = "";      
}
function operador(operacion){
    var memoria=document.getElementById("output").value;
    document.getElementById("output").value = 0; 

    document.getElementById("dato").value = memoria;
    document.getElementById("operacion").value = operacion;  
    }

function operar(){

    var operacion = document.getElementById("operacion").value;
    var datouno = document.getElementById("dato").value;
    var datodos = document.getElementById("output").value;
    operacion=String(operacion);
    datouno=Number(datouno);
    datodos=Number(datodos);
     if(operacion=="suma"){
       var resultado = datouno+datodos;
    }
    if(operacion=="resta"){
       var resultado = datouno-datodos;
    }
    if(operacion=="division"){
       var resultado = datouno/datodos;
    }
    if(operacion=="multiplicacion"){
       var resultado = datouno*datodos;
    }
    document.getElementById("output").value = resultado;
}