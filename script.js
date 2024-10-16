// /* Función Regular declarativa */
// funcionRegularDeclarativa()
// function funcionRegularDeclarativa() {
//     console.log('Esto es una función regular declarativa')
// }
// funcionRegularDeclarativa()

// /* Función Regular de expresión */
// let funcionRegularDeExpresion = function () {
//     console.log('Esto es una función regular de expresión')
// }
// funcionRegularDeExpresion()

// /* Función Flecha (De expresión) */
// let funcionFlecha = () => {
//     console.log('Esto es una función flecha')
// }
// funcionFlecha()

// function calcularSalario(sdfgsdfg, sgdfgsdfg) {
//     let salario = sdfgsdfg * sgdfgsdfg
//     console.log('Su salario es: ' + salario)
// }
// function calcularHorasExtras(cantidadHoras) {
//     if (cantidadHoras > 46) {
//         console.log('Usted tiene: ' + (cantidadHoras - 46) + ' Horas extras')
//     }
// }
// let valorHora = Number(prompt('Ingrese el valor de la hora: '))
// let cantidadHoras = Number(prompt('Ingrese la cantidad de horas: '))

// calcularSalario(valorHora, cantidadHoras)
// calcularHorasExtras(cantidadHoras)



function calcularHorasExtras(cantidadHoras) {
    if (cantidadHoras > 92) {
        let horasExtras = cantidadHoras - 92
        return horasExtras
    } else {
        return 0
    }
}
function calcularValorHorasExtras(cantidadHoras, valorHora) {
    let valorHoraExtra = valorHora * 1.25
    return cantidadHoras * valorHoraExtra
}
function calcularSalarioBruto(cantidadHoras, valorHora) {/* Sin deducciones */
    let salarioBruto = cantidadHoras * valorHora
    return salarioBruto
}
function calcularSalarioNeto(salarioBruto, deducciones, valorHoraExtra) {
    console.log('El empleado tiene un salario bruto de: ' + salarioBruto + ' con unas deducciones por valor de: ' + deducciones + ' y un valor de horas extras por: ' + valorHoraExtra + '. El Salario neto a pagar es: ' + (salarioBruto - deducciones + valorHoraExtra))
}
function calcularDeducciones(salarioBruto) {
    let deducciones = salarioBruto * 0.08
    return deducciones
}
let cantidadHoras = 100
let valorHora = 10000

let retornoValorHorasExtras = calcularValorHorasExtras(calcularHorasExtras(cantidadHoras), valorHora)
let retornoDeducciones = calcularDeducciones(calcularSalarioBruto(cantidadHoras, valorHora))
let retornoSalarioBruto = calcularSalarioBruto(cantidadHoras, valorHora, calcularHorasExtras(cantidadHoras))
calcularSalarioNeto(retornoSalarioBruto, retornoDeducciones, retornoValorHorasExtras)
