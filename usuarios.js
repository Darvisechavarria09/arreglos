let usuarios=[
    {nombre:"juan",edad:20,espaisa:true},
    {nombre:"maria",edad:16,espaisa:false},
    {nombre:"james",edad:29,espaisa:true},
    {nombre:"jbalvin",edad:8,espaisa:true},
    {nombre:"jose",edad:26,espaisa:false},
    {nombre:"lucho",edad:28,espaisa:true},
    {nombre:"falcao",edad:34,espaisa:false},
    {nombre:"mariana",edad:19,espaisa:true},
    {nombre:"lina",edad:20,espaisa:false},
    {nombre:"diomedez",edad:60,espaisa:false}
]

//filtrar el arreglo para mostrar solo los usuarios menores de edad
//FUNCION TRADICIONAL
/*let filtrado = usuarios.filter(function(usuario){

    return(usuario.edad<=18)
  
})
  console.log(filtrado)*/

//FUNCION FLECHA
/*let mostrar = usuarios.filter(elemento => elemento.edad<=18)
console.log(mostrar)*/

//-------------------------------------------------------------------------
//filtrat usuarios que sean paisas
//FUNCION TRADICIONAL
/*let filtrado = usuarios.filter(function(usuario){

    return(usuario.espaisa!=true)
  
})
  console.log(filtrado)*/

//FUNCION FELCHA
/*let mostrar = usuarios.filter(usuario =>usuario.espaisa==true)
console.log(mostrar)*/

//-------------------------------------------------------------------------
//filtrar objetos de medellin y menores de edad
//FUNCION TRADICIONAL
/*let filtrado = usuarios.filter(function(usuario){

    return(usuario.edad<=18 & usuario.espaisa==true)
  
})
  console.log(filtrado)*/

//FUNCION FLECHA
/*let mostrar = usuarios.filter(usuario=> usuario.espaisa==true & usuario.edad<18)
console.log(mostrar)*/

//-------------------------------------------------------------------------
//MAPEO, ASIGNA,ALTERA
/*let datosMapeados = usuarios.map(function(usuario){

    return(usuario.nombre=usuario.nombre+" -- cesde")

})
console.log(datosMapeados)
console.log(usuarios)
*/

//FUNCION FLECHA
/*let datosMapeados = usuarios.map(usuario=>usuario.nombre=usuario.nombre+" -- Cesde")
console.log(datosMapeados)
console.log(usuarios)*/


//FOREACH
//incrementa en cada vuelta
/*suma=0
usuarios.forEach(function(usuario){

    suma=suma+usuario.edad
    console.log(suma)

})*/
//FUNCION FLECHA
/*let suma = 0
usuarios.forEach(usuario =>suma=suma+usuario.edad)
console.log(suma)*/

