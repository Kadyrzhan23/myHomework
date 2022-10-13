let str_true = '2012/02/28 12:10' 
let str_false = '2011/12/31 09:09' 
 

let template = /(?<year>1[0-9]{3}|20(0[0-9]|1[0-2]))\/((?<month1>0[1,3,5,7,8]|1[0,2])\/(?<day1>0[1-9]|[1,2][0-9]|30|31)|(?<month2>0[4,6,9]|11)\/(?<day2>0[1-9]|[1,2][0-9]|30)|(?<month3>02)\/(?<day3>0[1-9]|[1,2][0-8]))\s(?<time>([01][0-9]|2[0-3]):([0-5][0-9]))/ 
 
console.log(str_true.match(template)); 
console.log(str_false.match(template));