function User(name) {
    this.name = name;
    this.isAdmin = false;
    this.sayHi = function() {
        alert( "My name is: " + this.name );
    };
}

let user = new User("Jack");
console.log(user.name);