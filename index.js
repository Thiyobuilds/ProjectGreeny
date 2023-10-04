let increCard1 = document.getElementById("card-1-incre");
let decreCard1 = document.getElementById("card-1-decre");
let priceCard1 = document.getElementById("card-1-price");
let cardQuen1 = document.getElementById("card-1-quan")
let quenCount1 = 1;
let priceCount1 = 20;

increCard1.addEventListener("click",()=>{
   
   quenCount1 += 1
   cardQuen1.textContent = quenCount1;

   priceCount1 += 20;
   priceCard1.textContent = "$"+priceCount1;

})

decreCard1.addEventListener("click",()=>{

    if(priceCount1 == 20){
        priceCard1.textContent = "$20";
    }
    else{
        quenCount1 -= 1
        cardQuen1.textContent = quenCount1;
    
        priceCount1 -= 20;
        priceCard1.textContent = "$"+priceCount1;
    }
 
 })




 let increCard2 = document.getElementById("card-2-incre");
let decreCard2 = document.getElementById("card-2-decre");
let priceCard2 = document.getElementById("card-2-price");
let cardQuen2 = document.getElementById("card-2-quan")
let quenCount2 = 1;
let priceCount2 = 50;

increCard2.addEventListener("click",()=>{
   
   quenCount2 += 1
   cardQuen2.textContent = quenCount2;

   priceCount2 += 50;
   priceCard2.textContent = "$"+priceCount2;

})

decreCard2.addEventListener("click",()=>{

    if(priceCount2 == 50){
        priceCard2.textContent = "$50";
    }
    else{
        quenCount2 -= 1
        cardQuen2.textContent = quenCount2;
    
        priceCount2 -= 50;
        priceCard2.textContent = "$"+priceCount2;
    }
 
 })



 let increCard3 = document.getElementById("card-3-incre");
 let decreCard3 = document.getElementById("card-3-decre");
 let priceCard3 = document.getElementById("card-3-price");
 let cardQuen3 = document.getElementById("card-3-quan")
 let quenCount3 = 1;
 let priceCount3 = 90;
 
 increCard3.addEventListener("click",()=>{
    
    quenCount3 += 1
    cardQuen3.textContent = quenCount3;
 
    priceCount3 += 90;
    priceCard3.textContent = "$"+priceCount3;
 
 })
 
 decreCard3.addEventListener("click",()=>{
 
     if(priceCount3 == 90){
         priceCard3.textContent = "$90";
     }
     else{
         quenCount3 -= 1
         cardQuen3.textContent = quenCount3;
     
         priceCount3 -= 90;
         priceCard3.textContent = "$"+priceCount3;
     }
  
  })





  let increCard4 = document.getElementById("card-4-incre");
  let decreCard4 = document.getElementById("card-4-decre");
  let priceCard4 = document.getElementById("card-4-price");
  let cardQuen4 = document.getElementById("card-4-quan")
  let quenCount4 = 1;
  let priceCount4 = 20;
  
  increCard4.addEventListener("click",()=>{
     
     quenCount4 += 1
     cardQuen4.textContent = quenCount4;
  
     priceCount4 += 20;
     priceCard4.textContent = "$"+priceCount4;
  
  })
  
  decreCard4.addEventListener("click",()=>{
  
      if(priceCount4 == 20){
          priceCard4.textContent = "$20";
      }
      else{
          quenCount4 -= 1
          cardQuen4.textContent = quenCount4;
      
          priceCount4 -= 20;
          priceCard4.textContent = "$"+priceCount4;
      }
   
   })