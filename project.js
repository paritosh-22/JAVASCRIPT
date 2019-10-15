// let lang = [
//          /*0*/   'nodejs',
//          /*1*/    'angular',
//            /*2*/  'react',
//            /*3*/'expressjs',
//             /*4*/ 'mongodb',
//             /*5*/ 'typescript',
        
//      ];
//         //  lang.fill('shashi');
        // let test = lang.includes('nodejs');
        // if (lang.includes('nodejs')){
        //     alert('nodejs is here');
        // }else{
        //     alert(' no value  here');
        // }
        // // lang.includes("shashi");
        // console.log(test);
        // console.log(lang);

        //  var numbers = [10,40,50,20,70,20,300,5000];
        //   var reduce = numbers.reduce(function(a,b){
        //     console.log(a);
        //     console.log(b);
        //     return a+b ;

        //   });
        //   console.log(reduce);
        //    var reducedwithArrowfunction = numbers.reduce((a ,b)=> a+b);
        //    console.log(reducedwithArrowfunction);

    //  var sortMethod = lang.sort();
    //  console.log(sortMethod);


    //  var numbers = [10,40,50,20,70,20,300,5000];
    //   var sortwithnumbers = numbers.sort((a,b) => a-b);
    //    console.log(sortwithnumbers);


 var array1 = [
     'aws',
     'node',
     'node',
     'node',
     'node',
     'node',
     'python',
     'angularjs',
     'angularjs',
     'angularjs',
     'angularjs',
     'angularjs',
     'expressjs',
     'java',
     'java',
     'java',
     'java',
     'java',
     'reactwithnative',
     'firebasewithgoogle',
 ];
//   var resultwithnormalfunction = array.filter(function (word){

//   return word.length>6

// }); //es5 way
// console.log(array);
//  var result = array.filter(word => word.length>6); //es6
//  console.log(result);
//  var test = array.filter(function(value ,index, array) {
//     console.log(array);
//     console.log(value);
//     console.log(index);
//     return array.indexOf(value) == index;
//  }); //es5 way
//  console.log(array1);

 let [...es6way] = new Set(array1);
 console.log(es6way); //es6 way
 console.log(array1);