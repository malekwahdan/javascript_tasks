
function check_eligilblity(birthyear){
    const d=new Date();
var thisyear=d.getFullYear();
var age;
var result;
    age=thisyear-birthyear;
    if(age>30){
        result="you are not eligible. you may join other programs.";
    }else if(age>=18 && age<=30){
        result="you are eligible. Start your application";
    }else if(age<18){
        result="you may join the kids program";
    }else if(age>60){
        result="you may join the senior program";
    }
    console.log(result);
}
check_eligilblity(1997);


// var upperlower="OrAnGe";
// var array=upperlower.split("");
// console.log(array);
///////////////
// 



var upperlower = "OrAnGe";
var array = upperlower.split("");
for (var i = 0; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
        array[i] = array[i].toLowerCase();
    } else {
        array[i] = array[i].toUpperCase();
    }
}
console.log(array.join(""));

// function camlecase (word){
//     var myarray=word.split(" ");
    
//     for(var i=0; i<myarray.length;i++){
//         var firstletter=myarray[i].charAt(0).toUpperCase()+myarray[i].slice(1).toLowerCase();
//     } 
//     console.log(firstletter);
// }
// camlecase("orange academy")
function delete_index(removerindex){
    var myarray=["coding","academy","by","orange"]
    var a=myarray.splice(removerindex,1);
    console.log(myarray);
}

delete_index(2)

function oddoreven(number){
if(number % 2==0){
    console.log("even");
}else{
    console.log("odd");
}
}
oddoreven(2);
function isitanumber(number11){
if(Number.isInteger(number11))
{
    console.log("its a number");
}else{
    console.log("not a number");
}

}
isitanumber(1)
function whichoneislarger(a,b){
if(a>b){
    console.log(a);
}else{
    console.log(b);
}
}
whichoneislarger(2223,301)
function triangle(a,b,c){
if(a===b && a===c){
    console.log("equilateral");
}else if(a===b || a===c){
    console.log("isosceles");
}else if(a!==b && a!==c){
    console.log("scalence");
}
}
triangle(1,13,2);
function checknumber(a){
    var arrayy=[1,2,3,4,5,6,7,8,9]
   
        if(arrayy.includes(a)){
           console.log("the number withen the range");
        }else{
          
           console.log("outside the range");
        }
    }
    

checknumber(7)
function leapyear(year){
if(year % 4===0 && year % 100 !==0 || year%400===0){
    console.log("leap year");
}
else{
    console.log("not a leap year");
}
}
leapyear(5)


