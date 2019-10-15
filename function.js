/*var users =new Function(console.log('hello fullstack'));
users();*/
/*
function username(){
    console.log('hello paritosh');
}
username();
username();
username();
username();
username();
username();

function username(username){
    return username;
}
console.log(username('shashi'));

console.log(username('pari'));
console.log(username('ms'));
console.log(username('es'));
console.log(username('debi'));
console.log(username('rati'));

function username(name,password) {
    console.log(name + password);
}
username('paritosh', 1234);


"use strict"

function username(name,password ,name,password) {
    console.log(name + password);
}
username('paritosh', 1234, 'manu', 222 );// overridding but no good practice


 function number(){
     let args = arguments;
     console.log(args);
     console.log(Array.isArray(args));// false
     let[...checkspread]= args;
     let ArrayFrom = Array.from(args);
     console.log(typeof checkspread);// object
     console.log(Array.isArray(checkspread));// true

    console.log(arguments);
 }
 number(10,10,10,10);
 var array =[1,4,6,8];
 console.log(array);


//function closure in javscript...
var simpleText ="hello"// global scope
function jspiders(){
    let outerBlock = 'this is outer block';//local scope for jspiders
    console.log(outerBlock);
    console.log(simpleText);
    function qspiders(){
       let qspiders = "helo how r u"// local scope for qspiders avilable
       console.log(qspiders);
       console.log(jspiders);//closure here...
       
    }//this is qspiders block/called
    qspiders();//calling qspiders
}
jspiders();// calling jspiders function

function show(callback){
    console.log('hello jspiders');
    callback();
}
function qspiders(){
    console.log('only testing here')
}
show(qspiders);


var languages = ['java','python',];
function lan(){
    console.log(languages);
}
lan();

function jspiders(callback){
    console.log('jspiders here');
    callback();
}
jspiders(function() {
    alert(' hello shashi');
});

sachin();
function sachin(){
    console.log(' hy sachin how r u ');
}// called // name function is working
dravid();
var dravid = function(){
    console.log('hey dravid how r u');
};// called // function is notworking

 function username1(){
     console.log('hello pari');
 };// this is naming function
 username1();//es5*/
 //es6
   let username = () => {
       console.log(' fat arrow function');
   };
   username();
     

   let password = _ => console.log('password here');
   console.log(password);

   //es5 way
    let email1 = function (email1) {
         return email1;
    }
    console.log(email1('shashi@gmail.com'));//es5
      let email = email => {
          return email;
      }; //es6 return type with para

      let email = email => email;
      //es6 return type with para short form
      console.log(email('shashi@gmail.com'));