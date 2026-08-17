const button=document.getElementById("mybutton")
const label1=document.getElementById("label1")
const label2=document.getElementById("label2")
const label3=document.getElementById("label3")
const min=1
const max=6
var r1
var r2
var r3
button.onclick=function(){
    r1=Math.floor(Math.random()*max)+min
    label1.textContent=r1
    r2=Math.floor(Math.random()*max)+min
    label2.textContent=r2
    r3=Math.floor(Math.random()*max)+min
    label3.textContent=r3
} 