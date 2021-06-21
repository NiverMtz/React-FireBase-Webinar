
// VARIABLES
// const objeto = {
//     nombre : 'Niver',
//     apellido : 'Martinez'
// }

// console.log(objeto)

// TEMPLATE STRINGS
// const nombre = 'Niver'
// const apellido = 'Martinez'

// console.log(`El nombre es ${nombre} yl el apellido es ${apellido}`)

//OBJETOS
// const Persona = {
//     nombre: 'Manuel',
//     edad: 37,
//     casado: false,
//     hijo: {
//         nombre: 'Alma'
//     }
// }

// Persona.id = 1

// console.log(Persona.id)
// console.log(Persona.nombre)
// console.log(Persona.casado)
// console.log(Persona.hijo.nombre)

// OBJECT DESTRUCTURING
// const Persona = {
//     nombre: 'Manuel',
//     edad: 37,
//     casado: false,
//     hijo: {
//         nombre: 'Alma'
//     }
// }

// const {nombre, edad} = Persona
// console.log(nombre)
// console.log(edad)


// FETCH
// fetch('http://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json.userId))
//     .catchI(e => console.log(e))


// ASYNC & AWAIT
// const obtenerUsuario = async() => {
//     try {
//         const respuesta = await fetch('http://jsonplaceholder.typicode.com/todos/1')
//         const datos = await respuesta.json()
//         console.log(datos)
//     } catch(e) {
//         console.log(e)
//     }
// }

// obtenerUsuario()

// MAP
const datos = [
    {nombre: 'Manuel', edad: 37},
    {nombre: 'Mariana', edad: 38},
    {nombre: 'Marlen', edad: 21},
    {nombre: 'Fernanda', edad: 22}
]

datos.map( elemento => {
    console.log(elemento.nombre)
})