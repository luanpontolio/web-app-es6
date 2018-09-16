function sum(a, b){
    return a + b;
}

// named export
// permite que possamos ter varios exports dentro de um mesmo arquivo
// só neste caso só podemos chama-lo com o mesmo nome
// e o import precisa das chaves { sub }
export function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b) {
    return a / b;
}

export { mult as multiplicacao, div };

// método principal
// só pode haver um dafault por arquivo;
// Para o import podemos importar com qualquer nome
// e não precisa utilizar o nome
export default sum;