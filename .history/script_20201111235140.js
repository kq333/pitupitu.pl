window.onscroll = function() {myFunction()};
window.onscroll = function() {myFunction1()};


function myFunction(){
   

 

 if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.querySelector(".art1").className = "test";
  } 
  
  

}

function myFunction1(){
   

 

    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
       document.getElementById("bar").style.padding = "20px 5px;"
     } 
     
     
   
   }