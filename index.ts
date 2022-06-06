const suma = (a: number, b: number) => {
    return a + b
}
console.log(suma(1, 2))
console.log('typescript')

interface IAnimal {
    nombre: string
    tipo: 'terrestre' | 'marino'
    rugir(volumen: number): void
    domestico: boolean
}

interface IFelino extends IAnimal {
    visionNocturna: boolean
}
interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande'
}

const animal: IAnimal = {
    nombre: 'elefante',
    tipo: 'terrestre',
    rugir: (volumen) => `${volumen}dB`,
    domestico: true,
}
console.log(animal.rugir(8))

const felino: IFelino = {
    nombre: 'leon',
    tipo: 'terrestre',
    visionNocturna: true,
    rugir: (volumen) => `${volumen}dB`,
    domestico: true,
}
type IDomentico = ICanino | IFelino

const myAnimal: IDomentico = {
    domestico: true,
    nombre: 'perro',
    porte: 'medio',
    tipo: 'terrestre',
    visionNocturna: false,
}

console.log(animal)
console.log(felino)

//interfaces son utilizadas para definir conratos de estructura de datos de clases
//y los types para hacer mis de onterfaces en nuestro codigo
