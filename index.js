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
console.log(moment('2014-11-11').diff(moment('2015-09-11')));

