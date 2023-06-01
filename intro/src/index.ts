import validator from 'validator';

let nome: string = 'Raphael';

if(validator.isLowercase(nome)){
    console.log(`A string ${nome} é toda minúscula`);
}else{
    console.log(`A string ${nome} NÃO é toda minúscula`);
}