let person = {
    name: 'Kaspar',
    age: 28,
    print() {
        console.log("Kaspar is 28 years old");
    }
};


person.print();


let box = {
    height: 12,
    width: 12,
    length: 12,
    color: 'Red',
    resize(height, width, length){
        this.height = height;
        this.width = width;
        this.length = length;
    }
}

console.log(box);
box.resize(10,10,8);
console.log(box);
box.height = 44;
console.log(box);

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    print(){
        process.stdout.write(this.name + ' is ' + this.age + ' years old');
    }
}

let me = new Person('Kaspar', 28);
console.log(me);
me.print();
let vello = new Person('Vello', 58);
console.log(vello);
vello.print();
console.log(me);

class Employee extends Person {
    constructor(name, age, job){
        super(name, age);
        this.job = job;
    }

    print(){
        super.print();
        process.stdout.write('and is a ' + this.job);
    }
}

let pets = new Employee('Pets', 44, 'Janitor');
console.log(pets);
pets.print();