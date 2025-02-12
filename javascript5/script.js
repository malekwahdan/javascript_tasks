var array=[1,2,3,4,5]
array.forEach((x) => {
    console.log(x);
});
var array2=[1,2,3,4,5]
console.log(array2.map(num => num*2));
var array3=[1,2,3,4,5,6,7,8,9,10];
function evenOnlyy(a){
    if(a % 2==0){
        return a
    }
}
console.log(array3.filter(evenOnlyy));
var array4=[1,2,3,4,5]
var total=array4.reduce(sum)
function sum(a,b){
    return a+b;
}
console.log(total);
var array5=["bannana","apple","orange"]
console.log(array5.sort()); 
var array6=["bannana","apple","orange"]
console.log(array6.reverse());
var fArray=[1,2,3]
var sArray=[4,5,6]
var newarray=fArray.concat(sArray);
console.log(newarray);
var array7=[1,2,3,4,5,6,7,8,9]
var partofarray=array7.slice(2,4)
console.log(partofarray);
var array8=[1,3,4,5,6,2,44,3]
array8.splice(1,2)
console.log(array8);
array8.splice(1,2,99,999)
console.log(array8);

var array9=[1,2,3,4,5,6]
console.log(array9.indexOf(3)); 
var array10=[1,2,3,4,5,6]
console.log(typeof(array10.join("")) +array10.join("")); 

var str="orange academy";
var strToArray=str.split("");
console.log(strToArray);

var array11=[1,2,3,3,222,33,22,1,1,2,4,2]
console.log(array11.length);
var array12=[1,2,3,4,5,6]
for(let i of array12){
    console.log(i);
}

var array13=[1,2,4,5]
var str2={name:"malek",
            age:9999
}
console.log(Array.isArray(array13));
console.log(Array.isArray(str2));

var obj={
    0:"a",
    1:"b",
    2:"c",
    length:3
};
console.log(Array.from(obj));

console.log(Array.of(1,2,3,4,5,3,2,1));
var array14=[1,2,3,4,5,6];
array14.fill(0,0,3)
console.log(array14);

var array15=[1,2,3,4,5]
console.log(array15.copyWithin(1,0,3));
