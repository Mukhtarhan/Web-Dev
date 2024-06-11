
let year = prompt.get('In which year was the ECMAScript-2015 specification published?', '');
prompt.start();
if (year == 2015) {
    console.log( 'You guessed it right!' );
} else {
    console.log( 'How can you be so wrong?' ); // any value except 2015
}
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';

console.log( message );