totalfinal = 0;
var PF1 = 0;
var PF2 = 0;
var PF3 = 0;
var PF4 = 0;
var PF5 = 0;
var PF6 = 0;
var PF7 = 0;
var PF8 = 0;
var PF9 = 0;
var PF10 = 0;
console.log("_____BIENVENIDO A NESALA_____");
console.log("1.SABRITAS  |   CODIGO 111    |");
var P1= 30;
console.log("2.TENNIS    |   CODIGO 222    |");
var P2= 30;
console.log("3.PLAYERA   |   CODIGO 333    |");
var P3= 30;
console.log("4.JUGO      |   CODIGO 444    |");
var P4= 30;
console.log("5.CERVEZA   |   CODIGO 555    |");
var P5= 30;
console.log("6.VINO      |   CODIGO 666    |");
var P6= 30;
console.log("7.GALLETAS  |   CODIGO 777    |");
var P7= 30;
console.log("8.REFRESCO  |   CODIGO 888    |");
var P8= 30;
console.log("9.CEREAL    |   CODIGO 999    |");
var P9= 30;
console.log("10.PLAYERA  |   CODIGO 101    |");
var P10= 30;
console.log ("______________________________");
do{
var producto = parseInt(prompt("ingresa el codigo del producto que deseas comprar "));
switch(producto){
    case 111:
        console.log("SABRITAS | CUESTA $16 pza | quedan " +P1 +" PIEZAS" );
                        var SABRITAS = 16;
        var respu = parseInt(prompt("Cuantos deseas comprar? "));
        var TOTAL = SABRITAS * respu;
        break; 
        
    case 222: 
        console.log("TENNIS | CUESTA $200 pza | quedan " +P2 +" PIEZAS" );
                        var TENNIS = 200;
        var respu = parseInt(prompt("Cuantos deseas comprar? "));
        var TOTAL = TENNIS * respu;
        break;
        
         case 333:
        console.log("PLAYERA | CUESTA $150 pza | quedan " +P3 +" PIEZAS" );
                        var PLAYERA = 150;
        var respu = parseInt(prompt("Cuantos deseas comprar? "));
        var TOTAL = PLAYERA * respu;
        break;
        
         case 444:
        console.log("JUGO | CUESTA $15 pza | quedan " + P4 +" PIEZAS" );
                        var JUGO = 15;
        var respu = parseInt(prompt("Cuantos deseas comprar? "));
        var TOTAL = JUGO * respu;
        break;
        
        case 555:
        console.log("CERVEZA | CUESTA $42 pza | quedan " +P5 +" PIEZAS" );
                var CERVEZA = 42;
        var respu = parseInt(prompt("Cuantos deseas comprar? "));
        var TOTAL = CERVEZA * respu;
        break;
        
        case 666:
        console.log("VINO | CUESTA $365 pza | quedan " +P6 +" PIEZAS" );
        var VINO = 365;
        var respu = parseInt(prompt("Cuantos deseas comprar? "));
        var TOTAL = VINO * respu;
            break;
            
            case 777:
        console.log("GALLETAS | CUESTA $19 pza | quedan " +P7 +" PIEZAS" );
        var GALLETAS = 19;
        var respu = parseInt(prompt("Cuantos deseas comprar? "));
        var TOTAL = GALLETAS * respu;
        break;
                
                case 888:
        console.log("REFRESCO | CUESTA $28 pza | quedan " +P8 +" PIEZAS" ); 
        var REFRESCO = 28;
        var respu = parseInt(prompt("Cuantos deseas comprar? "));
        var TOTAL = REFRESCO * respu;
        break;
                    
                    case 999:
        console.log("CEREAL | CUESTA $21 pza | quedan " +P9 +" PIEZAS" );
                        var CEREAL = 21;
        var respu = parseInt(prompt("Cuantos deseas comprar? "));
        var TOTAL = CEREAL * respu;
        break;
                        
                        case 101:
        console.log("PLAYERA | CUESTA $250 pza | quedan " +P10 +" PIEZAS" ); 
                        var PLAYERA = 250;
        var respu = parseInt(prompt("Cuantos deseas comprar? "));
        var TOTAL = PLAYERA * respu;
        break;
}
console.log ("El total de tu compra es de $" + TOTAL + ".00");
var usu = parseInt(prompt("DESEAS COMPRAR OTRO PRODUCTO? 1=si / 0=no "));
}while(usu == 1);
var totalfinal = TOTAL;
console.log ("El total de tu compra final es de: $" + totalfinal + ".00");
