let person = {
    name: 'Kaspar',
    age: 28,
};

function hello(name='Nimetu'){
    console.log("hello " + name);
}

hello();
hello('Kaspar');
hello('Martin');
hello('Vello');

function sum(a=0, b=0) {
    if(a>0){
        return a + b;
    }
    return a - b;
}

console.log(sum(4,6));
let num = sum(7,1);

if(sum(4,7) > 2) {
    console.log("suurem");
}

function recursion(n){
    console.log(n);
    console.log(sum(n,n));
    if(n>0){
        recursion(n-1);
    }
}
recursion(10);