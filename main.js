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
    console.log(memoria);
    console.log(operacion);

}

function operar(){

    var operacion = document.getElementById("operacion").value;
    var datouno = document.getElementById("dato").value;
    var datodos = document.getElementById("output").value;
    operacion=String(operacion);
    console.log(datouno);
    datouno=Number(datouno);
    datodos=Number(datodos);
    
    console.log(operacion)
    
    if(operacion=="suma"){
        console.log(datouno);
        console.log(datodos);

        var resultado = datouno+datodos;
    }
    if(operacion=="resta"){
        console.log(datouno);
        console.log(datodos);

        var resultado = datouno-datodos;
    }
    if(operacion=="division"){
        console.log(datouno);
        console.log(datodos);

        var resultado = datouno/datodos;
    }
    if(operacion=="multiplicacion"){
        console.log(datouno);
        console.log(datodos);

        var resultado = datouno*datodos;
    }

    console.log(resultado);
    document.getElementById("output").value = resultado;



}

