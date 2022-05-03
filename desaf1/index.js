// DESAFIO 2  
function suma (num1, num2) { return num1 + num2;}
function resta (num1, num2) { return num1 - num2;}
function iva (totalCompra) { return totalCompra *0.21;}   
class producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
    }
    precioIva(){
      console.log(this.precio + (this.precio * 0.21));
    }
}
const productos = [];
productos.push(new producto("Asado", "1100"));
productos.push(new producto("bife", "750"));
productos.push(new producto("matambre", "800"));
productos.push(new producto("pollo", "600"));



for(const producto of productos){
    console.log(producto.precioIva());
} 

