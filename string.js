// string methods
// let str=  'hello nodejs and node js is backend...';
// // let result = str.indeOf('1');

// // let total = str.replace('nodejs', 'java');

// let regTotal = str.replace(/nodejs/g,'java');
// console.log(regTotal);


// let trimdata = "        paritosh u r a rawstar        ";
// let data =trimdata.trim();
// console.log(data);


 var str = "hello javacript and nodejs and angular";
//   str.toUpperCase();
//   str.toLowerCase();
//   str.strike(); //css

//   let substr = str.substr(0,5);
//   console.log(substr);
// //    let substring = str.substring();
// //    let slice = str.slice;

// 
// var test = str.substring(5,0);
//  console.log(test);
// var test = str.slice(5,0);
// console.log(test);


// let search =str.search('javscript1');
// console.log(search);

// let match = str.match(/java1/g);
// console.log(match);


// str.startsWith('e'); // true
// str.endsWith('a'); // true
// if (str.startsWith('h')){
//     alert ('string is startsWith "h"');
// } else {
//     alert(' it is not starting With "h"');
// }
//  var repeat = str.repeat(1000);
//  document.write(repeat);
  var test = str.split('')
  .reverse()
  .join(' ');
  console.log(test);