let num = false;
let date = new Date();

if(date.getDay() == 6){
    console.log("is party time");
} else if(date.getHours() >= 16 ){
    console.log("is time to go home")
} else {
    console.log("work work work");
}

switch(date.getDay()){
    case 0:
        console.log("Pühapäev");
        break;
    case 1:
        console.log("Esmaspv");
        break;     
    case 2:
        console.log("Teisipv");
        break;        
    case 3:
        console.log("kolampv");
        break;        
    case 4:
        console.log("nejalpv");
        break;       
    case 5:
        console.log("reede");
        break;              
    default: 
        console.log("pidupäev");
        break;
}

for(let i=10;i>0;i--){
    if(i%2 == 0){
        console.log(i);
    }
}

// while(date.getSeconds() != 1){
//     console.log(date.getSeconds());
//     date = new Date();
// }

while(false) {
    console.log("will not show");
}

do {
    console.log("will show");
} while(false);

let array = ['apple', 'cherry', 'pear'];

array.forEach(function(fruit){
    console.log(fruit);
});

for(i = 0; i<array.length; i++){
    console.log(array[i]);
}

