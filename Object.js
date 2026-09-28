let user = {
    firstName: "Mouad",
    age: 17,

    introduce: function() {
        console.log("My name is " + this.firstName);
        console.log("I am " + this.age + " years old");
    }
};

user.introduce();