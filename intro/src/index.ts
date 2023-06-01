import * as Matematica from './Matematica'; //(importando tudo que tem export no arquivo)
//import { somar, subtrair, multiplicar } from './Matematica'; (importando funções específicas com export no arquivo)
//import Matematica from './Matematica'; (importa tudo que exportado como default)

let n1: number = 10;
let n2: number = 2;

console.log(`SOMA: ${Matematica.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${Matematica.subtrair(n1, n2)}`);
console.log(`MULTIPLICAÇÃO: ${Matematica.multiplicar(n1, n2)}`);