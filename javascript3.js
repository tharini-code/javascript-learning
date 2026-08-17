const myage=document.getElementById("myage")
const mybutton=document.getElementById("mybutton")
const relement=document.getElementById("resultelement")
var age
mybutton.onclick=function(){
    age=myage.value
    age=Number(age)
    if(age>=100){
        relement.textContent="you are too old for applying"
    }
    else if(age==0){
        relement.textContent="you are just born"
    }
    else if(age>=18){
        relement.textContent="you can apply for this "
    }
    else if(age<0){
        relement.textContent="wrong entry of age"
    }
    else{
        relement.textContent="you must be 18+ to apply for this"
    }
}