var cash=1000;
var liabilities=500;
console.log(cash / liabilities);
var revenues=1000;
var expense=500;
console.log(revenues-expense);
var liabi=1000;
var equilty=500;
console.log(liabi+equilty);
var profit=1000;
var sales=500;
console.log(profit*sales);
const avr = [7,9,2];
let sum = 0;
for (i = 0; i < avr.length; i++) {
  sum += avr[i];
}
var avarge=sum / avr.length;
console.log(avarge);
var price=150;
var discount=0.3;
var total=price * discount;
var totalafterdiscount=price-total;
console.log(totalafterdiscount);
var age=20;
function agelimit (){
if(age>18 && age<30){
return true
}
else{
    return false
}
}
console.log(agelimit());
console.log(Math.pow(1,2));
console.log(Math.pow(2,3));
console.log(1%2);
console.log(2%3);


