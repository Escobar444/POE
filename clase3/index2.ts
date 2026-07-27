let PreciosBase:number [] = [100,200,250,80,550]

//utilizando .map vamos a tomar cada elemento y lo vamos a modificar
//iva del 13% a cada precio base

let PrecioConIVA: number [] = PreciosBase.map((precio) => precio * 1.13)
console.log("precio base " + PreciosBase)
console.log("precio con IVA " + PrecioConIVA);
// separamos cada precio
console.log("precio base separado " + PreciosBase.join(", ") + " precio con IVA separado " + PrecioConIVA.join(", "));

console.log(PreciosBase.map((precio, index) => `precio base: ${precio} + precio con IVA: ${PrecioConIVA[index]}`).join(", "));

PreciosBase.forEach((precio)=> {
    console.log(`Precio Base: ${precio} -  Con IVA: ${ (precio * 1.13).toFixed(2) }`)
})

//filtar precios arriba de $200 dolares

let PreciosAltos: number[] = PreciosBase.filter((precio) => precio > 200)
console.log("precios altos " + PreciosAltos);