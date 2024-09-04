// let quadrado = function(x){
//     return x*x
// }

// let quadrado = (x) => {
//     return x * x
// }

// let quadrado = (x, y) => {
//     return x * x + y
// }

// let quadrado = x => x * x // Return Implicito

// document.write(quadrado(2))

// let parOuImpar = numero => {
//     if(numero % 2 === 0){
//         return 'Par'
//     }else{
//         return 'Impar'
//     }
// }

let parOuImpar = numero => numero % 2 === 0? 'Par' : 'Impar' // Return Implicito
document.write(parOuImpar(2))