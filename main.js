const IdCode = require('./IdCode.js');


let me = new IdCode('39303217010');
console.log( me.isMale() );
console.log( me.isFemale() );
console.log( me.getCentury() );
console.log( me.getYear() );