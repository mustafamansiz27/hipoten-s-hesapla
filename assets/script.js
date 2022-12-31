const komsuKenar =document.querySelector("#komsuKenar");
const karsiKenar =document.querySelector("#karsiKenar");
const basla =document.querySelector("#basla");
const hesapla =document.querySelector("#hesapla");
const result = document.querySelector("#result");



basla.addEventListener("click",()=>{
    komsuKenar.disabled = false;
    karsiKenar.disabled = false;
})
   
const hipotenüs =(a,b)=>{
     return a**2 + b**2 ;  
}

hesapla.addEventListener("click",()=>{
    if(!komsuKenar.value ||  !karsiKenar.value ) return;

      result.innerHTML =Math.sqrt(hipotenüs(komsuKenar.value,karsiKenar.value));


})