function multply(a, b) {
    b = (typeof b !== 'undefined') ? b : 1;
    return a * b;
}

console.log(multply(5, 2));
console.log(multply(5, 1));
console.log(multply(5));

function multply2(a, b = 1) {
    return a * b;
}

console.log(multply2(5, 2));
console.log(multply2(5, 1));
console.log(multply2(5));