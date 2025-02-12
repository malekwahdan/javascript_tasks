var obj={
    name: "malek",
    age: 27,
    gender:"male"
};
console.log(obj.name,obj.age,obj.gender)

var obj2={
    name: "malek",
    age: 27,
};
obj2.gender="male"


obj2["lastname"]="wahdan";
console.log(obj2)
console.log(obj2.name)
console.log(obj2["age"])
for(let i in obj){
    console.log(i+" :"+obj[i])
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
var hobby={
    h1:"coding",
    h2:"coding",
    h3:"coding",
    h4:"coding",
}
console.log(Object.assign(obj,hobby))
Object.freeze(obj);
var frozenObj={
    name:"malek",
    age:27
}
Object.freeze(frozenObj);
frozenObj["last name"]="wahdan";
console.log(frozenObj)
var obj4={
    name:"name",
    age:27
}
Object.seal(obj4)
obj4.age=22;
console.log(obj4)
obj4["gender"]="male";
console.log(obj4)