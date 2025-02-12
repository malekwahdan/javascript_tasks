// var a=document.getElementById("username");
// var namel=document.createElement('label');
// namel.innerHTML="username: ";
// var form=document.getElementById('form')
// form.insertBefore(namel,a)
// var pass1=document.getElementById('password1')
// var pasl1=document.createElement('label').innerText='Password: '
// a.insertAdjacentHTML("afterend",pasl1)
// var c=document.getElementById("p");
// var v=document.createElement('label').innerHTML='Password: '
// c.insertAdjacentHTML("beforebegin",v)
// var checkPass=document.getElementById("check");
    
// let w=a.innerText
// // if( document.getElementById('p').value=="" && document.getElementById('password1').value==""  ){
// //     document.getElementById('check').disabled=true
// //  }else 
// function click(){
// if(a.value==""){
//     document.getElementById("name_check").textContent="dsad"
// }

// }
//     if(document.getElementById('p').value!==document.getElementById('password1').value){
//     document.getElementById('check').disabled=true
//  } else if(document.getElementById('p').value==document.getElementById('password1').value){
//     document.getElementById('check').disabled=false
//  }
// checkPass.addEventListener('click',function(){
//     if(document.getElementById('p').value!==document.getElementById('password1').value){
//          alert("change password")
//      }
   
   
// })

document.getElementById('btn').disabled=true


var btn_disable=true;
    function validateForm(){
    if(document.getElementById("name").value==""){
        document.getElementById("name_check").textContent="Required"
        return
    }else if(document.getElementById("password").value==""){
        document.getElementById("password_check").textContent="Required"
        return
    }else if(document.getElementById("password2").value==""){
        document.getElementById("password2_check").textContent="Required"
        return
    }else if(document.getElementById("password").value!==document.getElementById("password2").value){
        document.getElementById("password_match").textContent='password does not match'
        return
    }else{
        document.getElementById("name_check").textContent=""
        document.getElementById("password_check").textContent=""
         document.getElementById("password2_check").textContent=""
         document.getElementById("password_match").textContent=''
         
       
        document.getElementById('btn').disabled=false
        document.getElementById('btn').addEventListener('click', function(event){
            document.getElementById('reg').textContent='registred succsseffully'
        })
    }
    

    }
    document.getElementById("name").addEventListener("input", validateForm);
        document.getElementById("password").addEventListener("input", validateForm);
        document.getElementById("password2").addEventListener("input", validateForm);



// function disabled(){
// if(btn_disable==false){
//     document.getElementById('btn').disabled=false

// }


// }
// window.addEventListener("resize", disabled);
// disabled(); 
var x=document.getElementById('colored').innerHTML



    
var array=x.split(' ')
for(var i=0;i<array.length; i++){
if(array[i].length>8){
    array[i]=`<span class='yellow'> ${array[i]}</span>`

}
}
document.getElementById('colored').innerHTML=array.join(" ")
var orderd=document.getElementById('colored').innerHTML;
// var array2=orderd.split('')
// for(var i=0;i<array2.length; i++){
// if(array2[i]=="."){
//     array2[i]=`<br>`
// }
// }
// document.getElementById('colored').innerHTML=array2.join('.')
var m= orderd.split('.').join('.<br>');
document.getElementById('colored').innerHTML=m
document.getElementById("link").addEventListener('click',function(event){
    document.getElementById("colored").innerHTML=x
})
var arr2=document.getElementById('colored').textContent.trim().split(' ')
document.getElementById("count").textContent=arr2.length

var array3=[]
var html=""
function add(){

    var item=document.getElementById("item").value
   
    array3.push(item)
    
    html = "";
    array3.forEach(function(element,index){
        html+=`<li>${element} <button onclick="a(${index})">delete</button></li> `
    })
    document.getElementById("ul").innerHTML=html
}
function a(index){
     array3.splice(index,1)
    console.log(index);
    console.log(array3);
   var list= document.getElementById('ul')
   list.removeChild(list.children[index])
    // add()
}


var people=[]
var obj={}

function addplayer(){
    var player=document.getElementById("game_name").value
    var score=parseInt(document.getElementById("game_score").value)
    obj={
        playerr:player,
            scoree:score
}
        people.push(obj)
    
    console.log(people);
    
}

function display(){
    let html=''
    people.forEach(element => {
        html+=`<div>
                    
                    <div>${element.playerr}</div>
                </div>
                <div>
                    
                    <div>${element.scoree}</div>
                </div>`
        
    });
    document.getElementById("grid").innerHTML+=html
}

function displayResults(){
    var highestScore=people[0]
    var total=0;
    var avg=0;
    for(var i=0; i<people.length; i++){
      total+=people[i].scoree
        avg=total / people.length
        if(people[i].scoree > highestScore.scoree){
            highestScore=people[i]
            
        }
    }
    console.log(highestScore);
    document.getElementById("avg").textContent=`Avreage Score= ${avg}`
    document.getElementById("high").textContent=`High Score = ${highestScore.playerr} with Score ${highestScore.scoree}`

}


