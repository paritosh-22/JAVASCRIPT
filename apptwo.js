// function syntax
/*
function Hello()
{
console.log('hello function');
}
console.log(Hello());
//calledpart

//calling
 var users = function(){
     console.log('hello paritosh');
 };
 users();
 users();
 users();

 function paritosh(){
     alert('hello')
 };
 console.log(paritosh());

//name: value
let users = function() {
    alert('hello world')
}
users();




function(){
    alert('hello paritosh')
    var username ="paritosh";
    var password = "123";
};
console.log(username,password);

(function(){
    console.log('hello');
    alert(2+2);
    var username ='shashi';
    var password = 123;// these two variables available in the nearest
    // scope function not avilable outside this scope
})();
console.log(username,password);
//uncaught reference error: username is not defined.

{
    console.log('hello');
    alert(2+2);
    var username = 'shashi';
    var password = 123 ;// these two variables available in nearest
    //scope function not available outside this scope
}
*/
function Users() {
    console.log('shashi');
    console.log('manu');
    var username = "manu";
    var password = 123;
}
Users();