/**
 * Object.assing()
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
//オブジェクトのクローン作成
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

//ディープクローンの警告
function test() {
    'use strict';

    let obj1 = { a: 0, b: {c: 0}};
    let obj2 = Object.assign({}, obj1);
    console.log(JSON.stringify(obj2));

    obj1.a = 1;
    console.log('obj1.a = 1;');
    console.log(JSON.stringify(obj1));
    console.log(JSON.stringify(obj2));

    obj2.a = 2;
    console.log('obj2.a = 2;');
    console.log(JSON.stringify(obj1));
    console.log(JSON.stringify(obj2));

    obj2.b.c = 3;
    console.log('obj2.b.c = 3;');
    console.log(JSON.stringify(obj1));
    console.log(JSON.stringify(obj2));

    //ディープクローン
    obj1 = { a: 0, b: {c: 0}};
    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj1.a = 4;
    obj1.b.c = 4;
    console.log('obj1 = { a: 0, b: {c: 0}};');
    console.log(JSON.stringify(obj3));
}

test();

// オブジェクトのマージ
let o1 = { a: 1 };
let o2 = { b: 2 };
let o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); //{a: 1, b: 2, c: 3}
console.log(o1); //{a: 1, b: 2, c: 3}
console.log(o2); //{b: 2}