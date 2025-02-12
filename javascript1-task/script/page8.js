function evennumbers(){
    for(var i=1; i<52; i++){
        if(i % 2 ==0){
            console.log(i);
        }
    }
}
evennumbers()
var i=0;
while(i<50){
i++;
if(i % 2 ==0){
    console.log(i);
    
}
}
var i=0;
var x=0;
while(x<100){
while(i<50){
i++;
if(i % 2 ==0){
    console.log(i);

}
}

x++;
if(x==50){
    i=0;
}}
for(var i=1; i<52; i++){
    if(i % 2 ==0){
        console.log(i);
        console.log(i);
    }
}
for(var i=1; i<52; i++){
    if(i % 2 ==0){
        console.log(i);
        
    }
}
var s=0;
while(s<50){
s++;
if(s % 2 !==0){
    console.log(s);
    
}
}
for(var j=1; j<100; j++){
    if(j % 3 ===0){
        console.log("Fizz");
    }else if(j % 5 ===0){
        console.log("buzz");
    }else if(j % 5 ===0 && j % 3===0){
        console.log("Fizzbuzz");
    }else{
        console.log(j);
    }
}
function numberbuzfuz(num){
    if(j % 3 ===0){
        return "Fizz"
    }else if(j % 5 ===0){
        return "buzz"
    }else if(j % 5 ===0 && j % 3===0){
        return "Fizzbuzz"
    }else{
        return num;
    }
}
for(var f=0; f<100; f++){
    console.log(numberbuzfuz(f));
}
function find_character(a){
var text="coding academy by orange"
var results=text.indexOf(a)+1
console.log(results);
}
find_character("o")
for(var i=0; i<21; i++){
    console.log(i);
}
for(var i=2; i<30; i++){
    if(i % 2!==0){
        console.log(i);
    }
}
for(var i=13; i>-15; i=i-1){
    if(i % 2===0){
        console.log(i);
    }
}
for(var i=50; i>20; i=i-1){
    if(i % 3===0){
        console.log(i);
    }
}
var orangetext="codingacademy";
var orangearray=[7,500,"KH404","black",36];
for(var i=0; i<orangearray.length; i++){
    console.log(orangearray[i]);
}
var orange_text_array=orangetext.split("").reverse();

for(var i=0; i<orange_text_array.length; i++){
    console.log(orange_text_array[i]);
}
var odd_even_array=[7,23,18,9,-13,38,-10,12,0,124];
var odd=[];
var even=[];
for(var i=0;i<odd_even_array.length; i++){
    if(odd_even_array[i] % 2 ===0){
        odd.push(odd_even_array[i])
    }else{
        even.push(odd_even_array[i])
    }
}
console.log(odd);
console.log(even);
var protein =["pork","tofu","beef","fish","beans"]
var grain=["pasta","corn","potato","quinoa","crackers"]
var vegetable=["green beans","kale","edamame","broccoli","asparagus"]
var beverage=["milk","water","soy milk","soda","tea"]
var dessert=["apple","banana","more kale","ice cream","chocolate"]

var mealss=[];
function meals(x){
    for(var i=0; i<x; i++){
        var meal=[]
        meal.push(grain[Math.floor(Math.random()*grain.length)]);
        meal.push(vegetable[Math.floor(Math.random()*vegetable.length)]);
        meal.push(protein[Math.floor(Math.random()*protein.length)]);
        meal.push(dessert[Math.floor(Math.random()*dessert.length)]);
        meal.push(beverage[Math.floor(Math.random()*beverage.length)]);
        var isUnique = true;
        for (var i = 0; i < mealss.length; i++) {
            var existingMeal = mealss[i].join(',');
            var newMeal = meal.join(',');
            if (existingMeal === newMeal) {
                break;    }
            }
            if (isUnique) {
                mealss.push(meal);
            }
        
    }
    return mealss;
   
        

}

console.log(meals(5));

