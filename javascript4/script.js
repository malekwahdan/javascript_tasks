for(let i=1; i<11; i++){
    console.log(i);
}
var x=0;
while(x<10){
    x++;
    console.log(x);
}
var array=[1,2,3,4,5];
for(var i=0; i<array.length;i++){
    console.log(array[i]);
}
for(let i=0; i<11; i++){
    if(i % 2==0){
        console.log(i);
    }
}
let res=0;
for(let i=0; i<11; i++){
    res+=i;
}

console.log(res);
var array2=[1,2,3,4,5,66,7,8,55,33,22,33,23,434,4444,9999999,6567,5];
array2[length]
var largest=array2[array2.length-1];
for(let i=0; i<array2.length; i++){
    if(largest<array2[i]){
        largest=array2[i];
    }
}
console.log(largest);

var array3=[1,2,3,4,5,55,6,7,0,-6,-99,-44,-928261]
var smallest=array3[0];
for(var i=0; i<array3.length; i++){
    if(smallest>array3[i]){
        smallest=array3[i]
    }
}
console.log(smallest);

var avg=0;
var array4=[2,2,2,2,2,2,2,4,1,5,2,555,22]
var total=0;
var count=array4.length;
for(var i=0; i<array4.length; i++){
    total+=array4[i];
}
avg=total/count;
console.log(avg);
var x=1;
for(let i=5; i>0;i=i-1){
    x*=i
}
console.log(x);
var firstNum=10;
var a=0;
var b=1;
console.log(a);
for(let i=0; a<=firstNum; i++){
    console.log(b);
    var nnum=a+b;
    const next = a + b;  
    a = b;        
    b = next;     
}
for (var i = 2; i < 20; i++) {
    var isPrime = true;

    for (var j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) console.log(i);
}

var nam=5;
var a=1;
for(var i=0; i<=10; i++){
    console.log( nam+"*"+i+"="+ i*nam);

}
var d2array=[[1,2,3],[4,5,6],[7,8,9]]
for(var i=0; i<d2array.length; i++){
    for(var x=0; x<d2array[i].length; x++){
        console.log(d2array[i][x]);
    }
}
var array5=[1,2,3,4,5,6];
for(var i=array5.length-1; i>=0; i=i-1){
    console.log(array5[i]);
}

var start=2;
var end=7;
var array6=[1,2,3,4,5,6,7,8,9];
for(var i=0; i<array6.length; i++){
    if(array6[i]>=start && array6[i]<=end){
        console.log(array6[i]);
    }
}
var array7=[1,2,3,4,5,6,7,8,9];
for(var i=0; i<array7.length; i+=2){
    console.log(array7[i]);
    
}
var array8=[1,2,3,4,5,6,7,8,9];
var x=5;
for(var i=0; i<array8.length; i++){
    if(array8[i]===x){
        console.log(true);
       
    }
    
}
var array9=[1,2,3,1,1,3,4,1,2,2,1,1,1,1];
var x=1;
var results=0;
for(var i=0; i<array9.length; i++){
    if(array9[i]===x){
        results+=1
    }
}
console.log(results);