const increase=document.getElementById("ibt")
const reset=document.getElementById("rbt")
const decrease=document.getElementById("rbt")
const count=document.getElementById("count")
var c=0
ibt.onclick=function(){
    c++
    count.textContent=c
}
rbt.onclick=function(){
    c=0
    count.textContent=c
}
dbt.onclick=function(){
    c--
    count.textContent=c
}
