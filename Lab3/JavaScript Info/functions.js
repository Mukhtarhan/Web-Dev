function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer

    console.log( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
console.log( from );