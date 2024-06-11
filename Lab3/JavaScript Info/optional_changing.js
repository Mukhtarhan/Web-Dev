let user = null;

console.log( user?.address ); // undefined
console.log( user?.address.street );
let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null;

console.log( user1?.[key] );
console.log( user2?.[key] );