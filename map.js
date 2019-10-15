var numbers =[1,3,6,8];


// var result =numbers.map( x=> x*2);
// var forEachway = numbers.forEach(x => {
//     return x*2;
// });
// console.log(forEachway);
// console.log(numbers);
// console.log(result);
//  var numbersoutput = numbers.reverse();

//  var array = ['shashi', 'sachin', 'dravid',  'robin'];
//   var arraytostring= array.toString();

//   var arraywithjoin = array.join('💯');


//   let [...arrayjust] = arraywithjoin;
//   let str = arrayjust.reverse().join('');
//   console.log(str);
//   console.log(typeof arraywithjoin);
//   console.log(arraywithjoin);
//   console.log(arraytostring);
//    console.log(numbersoutput);
 function username(name) {
    return [... name].reverse().join('');
 }
 console.log(username('prateekbia').toUpperCase());