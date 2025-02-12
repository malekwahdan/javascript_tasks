var age=19;
if(age>18){
    console.log("you are adult");
}
var score=45;
if(score<=50){
    console.log("you faild the test");
}
var name="john";
if(name=="john"){
    console.log("hello"+" "+name);
}
var day="monday";
if(day!=="saturday" && day!=="sunday"){
    console.log("its a weekday");
}
var num=4;
if(num % 2==0){
    console.log("the number is even");
}
var char;
char="orange";
if(typeof(char)==="string"){
    console.log("its a letter");
}
var a=[2,3,4]
if(Array.isArray(a)){
    console.log("its an array");
}
var x=5;
if(x>=0){
    console.log("x is postive number");
}
var y=-4;
if(y<=0){
    console.log("y is negative number");
}
var z=9;
if(z % 3===0){
    console.log("z is a multiple of 3");
}
var gpa=5.5;
if(gpa>=3.0){
    console.log("Congratulations, you have a good GPA!");
}
var password="mypassword";
var passLen=password.length;
if(passLen>=8){
    console.log("Your password is strong");
}
var age2=19;
if(age2>=18 && age2<=65)
{
    console.log("You are of working age");
}
var color="red";
if(color==="red" || color==="green" || color==="blue"){
    console.log("color is a primary color");
}
function isnumb(a){
if(!isNaN(a)){
    console.log(a+" " + "is vaild number");
}
else{
    console.log(a+ " " +" is not a number");
}
}
isnumb(223)