const IdCode = require('./IdCode.js');
const boxen = require('boxen');



let me = new IdCode('39303217010');
console.log( me.isMale() );
console.log( me.isFemale() );
console.log( me.getCentury() );
console.log( me.getYear() );

console.log(boxen( '' + me.getYear() , {padding: 1}));