const moment = require("moment");

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));
console.log(moment('2020-01-01', 'YYYY-MM-DD').isValid());
console.log(moment('2020-14-01', 'YYYY-MM-DD').isValid());
console.log(moment().add(7, 'days').calendar());
console.log(moment().add(7, 'months').calendar());
console.log(moment().add(7, 'years').calendar());
console.log(moment().subtract(7, 'days').calendar());
console.log(moment().subtract(7, 'months').calendar());
console.log(moment().subtract(7, 'years').calendar());

// difference in Date

var a = moment([2015, 09, 11]);
var b = moment([2014, 11, 11]);
console.log(a.diff(b, 'days'));

var d1 = moment([2015, 09, 16]);
var d2 = moment([2014, 11, 27]);
console.log(d1.diff(d2, 'days'));

// // Check is 2010-01-01 date after 2018-01-01

// console.log(moment(2010-01-01).add(7, 'days',);

// isLeapYear
console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());

const lodash = require("lodash");

let number = [2,3,false,null,4,5,6,[7,4,6,4],4];

console.log(lodash.chunk(number,2));

console.log(lodash.compact(number));

console.log(lodash.concat(number));


