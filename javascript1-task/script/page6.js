var a ="Orange Jordan";
function from_string_to_array(){
var arra=a.split(" ");
console.log(arra);
}
function hidnum (phonenum){
    var hidden="0******";
var pn=phonenum.slice(7);
var result=hidden+pn;
console.log(result);
}
from_string_to_array();
hidnum("07777777777")


function hidemail(email){
    var s=email.slice(2,5);
    var fg=email.replace(s,"....");
    console.log(fg);
}
hidemail("malek.whdn@gmail.com")

function up(io){
var hssdh = io.charAt(0).toUpperCase();

var p =io.replace(io.charAt(0),hssdh)
console.log(p);
return p;
}

up("coding academy by orange");
var k="coding academy by orange";
var arr2=k.split(" ");
var t=arr2.map(up);
var rre=t.join(" ");
console.log(rre);

function rev(nnumm){
    var a=nnumm.toString().split("").reverse().join("");
    console.log(a);
}
rev(123456789);

function replacee(){
    var num1=2;
    var num2=4;
    [num1,num2]=[num2,num1];
    console.log(num1,num2);
    num1=num1+num2;
    num2=num1-num2;
    num1=num1-num2;
    console.log(num1,num2);
    num1 = num1 * num2;
    num2 = num1 / num2;
    num1 = num1 / num2;
    console.log(num1,num2);
}
replacee()
   function deleteindex (x){
    var xarr=x.split('')
    var n=xarr.splice(3,1)
    var v= xarr.join("");
    console.log(v);
   }
    deleteindex("orange")
    
    function me(a,b)
    {
        var aa= a.split(a.charAt(0))
        var aaa=aa.join("");
        var bb= b.split(b.charAt(0))
        var bbb=bb.join("");
        var ab=aaa.concat(bbb);
        console.log(ab);
    }
 
     me("lora","inge")

    
    
    function torf(x){
        var firstchar=x.charAt(0);
 
    if(firstchar==="o")
{
    console.log(true);
}else{
    console.log(false);
}

}
torf("orange");
torf("zrange");
function strtoarr(str){
    var stringtoarray=str.split(" ")
console.log(stringtoarray);
}
strtoarr("Coding Academy By Orange");

function orderedabc(abc){
    var g=abc.split('').sort().join("");
console.log(g);
}

orderedabc("orange")
