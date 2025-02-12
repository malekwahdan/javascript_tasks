
function find_smallest_value(num){
    console.log(Math.min(...num));
}
find_smallest_value([3,6,1,8,-3,1]);

function alphabetical_sorted(str){
    console.log(str.split('').sort().join(""));
}
alphabetical_sorted("hello")
function factorial(i){
    var num=1;
    for( i; i!==0;i=i-1){
    num=num*i;
    }
    console.log(num);
}
factorial(8)
function evenorodd(x){
if(x % 2===0){
    console.log("even");
}else{
    console.log("odd");
}
}
evenorodd(9);
function removeodds(arr){
var even_num_only=[];
for(var i=0; i<arr.length; i++){
    if(arr[i] % 2===0){
        even_num_only.push(arr[i]);
    }
}
return even_num_only;
}
console.log(removeodds([1,2,3,4,5,6,7,8,33,1,4,2,1111,4,2,222]));
function deletestrings(a){
    
    for(var i=0; i<a.length; i++){
        let index=a.indexOf(a[i]);
        if(typeof(a[i])== "string"){
            a.splice(index,1);
            i--;
        }

    }
    return a;
}
console.log(deletestrings(["dsas",1,2,3,4,5,"das","dsad"]));

function addup(i){
    var num=0;
    for( i; i!==0;i=i-1){
    num=num+i;
    }
    console.log(num);
}
addup(2)
function array_min_max_avg(a){
    var min_number= Math.min(...a)
    var max_number= Math.max(...a)
    var len=a.length;
    var allelements=0;
    for(var i=0; i<a.length; i++){
        allelements=allelements+a[i];
    }
    var avg=allelements/len;
    var all_values_array=[];
    all_values_array.push(min_number,max_number,len,avg);
    return all_values_array;
}
console.log(array_min_max_avg([1,2,3,4,5,7,2,6,22,77,66,22,111]));

function roman(num){
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let result="";
    if(typeof num !=="number" || num<1 || num >3999 || !Number.isInteger(num)){
        throw new Error('invalide input')
    }
    for(var i=0; i<values.length; i++){
        while(num>=values[i]){
            result+=symbols[i];
            num-=values[i];
        }
    }
    return result;
}
console.log(roman(1948));

function countwords(a){
   var results2= a.split(" ").length
    
    console.log(results2);
}
countwords("welcome to orange academy hello")



function multi(arr){
    var newarrvalue=[];
for(var i = 0; i<arr.length; i++){
    
    newarrvalue.push(arr[i]*arr.length);
}
return newarrvalue;
}
console.log(multi([2,4,6]));

function towstring(str1,str2){
    
    var lastcharacter=str1.charAt(str1.length-1)
   
    var str2array=str2.split("")
    for(var i=0; i<str2array.length; i++){
        if(str2array[i]===lastcharacter){
            return true;
        }
        
    }
        return false;
    
}

console.log(towstring("dasdfd","lklk")); 

function double(text){
     text.split("")
var arraay=[];
for(var i=0; i<text.length;i++){
 var a=   text[i].repeat(2)
 arraay.push(a)
}
console.log(arraay.join(""));
}
double("coding")

function findIndex(arrray,name){
    var index=arrray.indexOf(name)
    var result;
    if(index===-1){
        return "no inex"
    }
    return index
}
console.log(findIndex(["malek","ahmad","wahdan"],"wahdan"));
function getTotalPostive(a){
var totalPositive=0;
for(var i=0; i<a.length; i++){
    if(a[i]<0){
        var postive=a[i]*-1;
    }
        else if(a[i]>0){
            postive=a[i]
        }
    
    totalPositive+=postive;
}
console.log(totalPositive);
}
getTotalPostive([-5,-3,-4,-5,-3,2,9,8,-7])
