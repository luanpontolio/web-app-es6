// Importação da bilioteca Ramda: https://ramdajs.com/docs/#union,
// onde o * representa que importaremos todos os métodos
// desta biblioteca e com `as` definimos de forma podemos acessa-los
// atraves de um alias e o `from` é de onde importamos. 
// import * as R from 'ramda';
// import { union as juntaTudo, uniq as sounicos } from 'ramda';
import * as R from 'ramda';

import sum, { sub, multiplicacao, div as dividir } from './utils';

// import * as React from 'react';
// import * as ReactDom from 'react-dom'

const array1 = [1,1,1,1,2,3,3,3,4];
const array2 = [2,3,5,6];

// const array3 = R.union(array1, array2)
const array3 = R.union(array1, array2);
const array4 = R.uniq(array1);

console.log(array3);
console.log(array4);

console.log(sum(15, 34));

console.log(sub(3, 2));

console.log(multiplicacao(10, 2));

console.log(dividir(4, 2));
