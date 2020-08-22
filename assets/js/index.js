function makeCounter() {
    let count = 0;
    return function counter () {
        return ++count;
    }
}

const counter = makeCounter();

function logParenthis (number) {
    let array = [];
    if (number === 1) {
        array.unshift('(');
        array.push(')');
        return array.join().replace(/,/g, '');
    }
    array.unshift('(');
    array.push(logParenthis(number - 1));
    array.push(')');
    return array.join().replace(/,/g, '');
}

console.log(logParenthis(5));

// function JadenCase(string) {

// }

function deleteFalsyValue(array){
    const falsyArray = [null, undefined, false, NaN, 0, ''];
    return array.filter((falsy) => falsyArray.includes(falsy));
}
    // array.forEach(
    //     function(item){
    //     if(falsyArray.includes(item)){
    //         delete item;
    //     }})
    // };

let array = [1, 2, 4, null, false, undefined, ''];
//debugger;
console.log(deleteFalsyValue(array));
console.log(array);
