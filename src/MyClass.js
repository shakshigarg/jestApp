const InMemoryData = require('./InMemoryData');
class MyClass {
    static classInstance
    constructor(name) {
        this.name = name;
        if (this.classInstance) {
            console.log("right")
            return this.classInstance;
        }
        this.classInstance = this;
        console.log("constructor here")
    }

    getName() {
        return this.name;
    }
    changeName(name){
        console.log("here2")
        this.name=name
    }
}

export function getMyClassInstance(){
    if (MyClass.classInstance) {
        console.log("right")
        return this.classInstance;
    }
    MyClass.classInstance = new MyClass();
    console.log("constructor here")
}

// export const myObj = new MyClass('John');
// myObj.changeName("saki")
// InMemoryData.value="Saki"
// module.exports = myObj;
