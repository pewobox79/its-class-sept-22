class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`Hallo ${this.name}! Du bist also ${this.age} Jahre alt!`)
    }
}

export default User;