// DESAFIO 1
/* let aVer  = prompt ("Cuál era el nombre de pila de Gengis khan?");

    while (aVer != "Temuyín"){ 
        alert (aVer + "??? vos decis? lo que te haría Kublai...");
        aVer = prompt ("vamos de nuevo peasant");
                            }
    alert ("CORRECTO!! POR LA HORDA!! beltalowda💪"); 
    */
// DESAFIO 2 - Ecomerce 
function suma (num1, num2) { return num1 + num2;}
function resta (num1, num2) { return num1 - num2;}
function iva (totalCompra) { return totalCompra *0.21;}
function descuento(valor){
    if(valor >=1000){
        return valor*0.30;
    }else{
        if(valor >= 500){
            return valor*.15;
        }else{
            return descuento = 0;
        }
    } 
}
//  compraTotal =  productoA + productoB +productoC 
let descTotal = descuento(5000) //sobre el valor de compraTotal
let compraTotal = 5000 // La suma de los productos seleccionados en el E-comerce 
let totalPagar = resta(suma(compraTotal, iva(compraTotal)), descuento(descTotal)) // A pagar = (5000+1050) - 1500)
// LOG
console.log(descTotal)
console.log(iva(compraTotal)) 
console.log(totalPagar) 
