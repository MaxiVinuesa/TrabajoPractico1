const scc = require('prompt-sync')();

let opc=0, num1=0, num2=0,num3=0, resultado=0, i=0, opc2=0, control=0;
let numeros = [];

// FUNCIONES

function suma(num1, num2, ...numeros) {
    resultado = num1 + num2;
    for (i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }
    console.log(`El resultado es: ${resultado}`);

    return resultado;
}

function resta(num1, num2, ...numeros){
    resultado = num1 - num2;
    for (i = 0; i< numeros.length; i++) {
        total -= numeros[i];
      }
    console.log(`El resultado es: ${resultado}`);

    return resultado;
}

function multiplicar(num1, num2, ...numeros){
    resultado = num1 * num2;
    for (i = 0; i< numeros.length; i++) {
        total *= numeros[i];
      }
    console.log(`El resultado es: ${resultado}`);

    return resultado;
}

function dividir(num1, num2, ...numeros){
    resultado = num1 / num2;
    for (i = 0; i< numeros.length; i++) {
        total /= numeros[i];
      }
    console.log(`El resultado es: ${resultado}`);

    return resultado;
}

function limpiar(){
    for(i=0; i< numeros.length; i++){
        numeros[i] = null;
    }
}


//MAIN


do{
    console.log("Que operacion desea realizar: ");
    console.log("1) Suma");
    console.log("2) Resta");
    console.log("3) Multiplicacion");
    console.log("4) Division");
    console.log("5) Salir.");
    

    opc = scc('');
    opc = parseInt(opc);

    if ( (opc >= 1)  && (opc <= 4) ){
            console.clear();
            num1 = scc('Ingrese el valor para el numero 1 ->' );
            num1 = parseInt(num1);
            console.clear();
            num2 = scc('Ingrese el valor para el numero 2 ->');
            num2 = parseInt(num2);
            console.clear();

            console.log("¿Desea ingresar mas valores?");
            console.log("1) Si.");
            console.log("2) No.");
            opc2 = scc('');
            opc2 = parseInt(opc2);

            if (opc2 == 1){
                control = 1;

                while(control == 1){
                        num3 = scc('Ingrese el valor para el numero -> ' );
                        num3 = parseInt(num3);
                        numeros.push(num3);

                        console.log("¿Desea ingresar mas valores?");
                        console.log("1) Si.");
                        console.log("2) No.");
                        control = scc('');
                        control = parseInt(control);
                        console.clear();
                }


            }
            else{
                //SIGUE CON EL PROCEDIMIENTO NORMAL
            }

    }    

    switch(opc){

        case 1:
            suma(num1, num2, ...numeros);
            limpiar();
            break;
        
        case 2:
            resta(num1, num2, ...numeros);
            limpiar();
            break;

        case 3:
            multiplicar(num1, num2, ...numeros);
            limpiar();
            break;


        case 4:
            dividir(num1, num2, ...numeros);
            limpiar();
            break;

        case 5:
            console.log("Gracias por usar la calculadora.");
            break;

        default:
            console.log("Ingrese una opcion valida");
            break;

    }


}while (opc != 5)