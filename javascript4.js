
const checkbox=document.getElementById("mycheckbox")
const royalenfild=document.getElementById("myroyalenfild")
const pulsar=document.getElementById("mypulsar")
const ktm=document.getElementById("myktm")
const mysubmit=document.getElementById("mysubmit")
const bikeresult=document.getElementById("bikeresult")
const brandresult=document.getElementById("brandresult")
mysubmit.onclick=function(){
    if(checkbox.checked){
      bikeresult.textContent="you have selected bike"
    }
    else{
        bikeresult.textContent="you have not selected any vehical"
    }
    if(royalenfild.checked){
        brandresult.textContent="you have selected royalenfild"
    }
    else if(pulsar.checked){
        brandresult.textContent="you have selected pulsar"
    }    
    else if(ktm.checked){
        brandresult.textContent="you have selected ktm"
    }
    else{
        brandresult.textContent="you did not select any brand"
    }
}