const suma = (a: number, b: number) => {
    return a + b
}
console.log(suma(1, 2))
console.log('typescript')
//especificamos pata typescript que el elemento input
//es un elemento HTML e incluye sus metodos html
const input = document.getElementById('input') as HTMLInputElement
input.addEventListener('input', (e) => {
    const i = e.currentTarget as HTMLInputElement
    console.log(i.value)
})

//interfaces son utilizadas para definir conratos de estructura de datos de clases
//y los types para hacer mis de onterfaces en nuestro codigo

//Generic Types

function fullList<T>(array: T[], valor: T) {
    return array.map(() => valor)
}
console.log(fullList([1, null, 'c'], 'd'))
