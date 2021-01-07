module.exports = class IdCode {
    constructor(idCode){
        this.idCode = idCode;
    }
    
    isMale(){
        let num = parseInt(this.idCode[0]);
        return num % 2 === 1;
    }
    isFemale(){
        return !this.isMale();
    }
    getCentury(){
        let num = parseInt(this.idCode[0]);
        num = Math.ceil(num/2);
        return 1700 + num*100;
    }
    getYear(){
        let num = parseInt(this.idCode.substr(1,2));
        return this.getCentury() + num;
    }

    getMonth(){

    }

    getMonthName(){
        //let date = new Date();
    }

    getDay(){  

    }
    getWeekDay(){ //monday, tuesday ....

    }

    isValid(){ // https://et.wikipedia.org/wiki/Isikukood, https://regexr.com/

    }
} 