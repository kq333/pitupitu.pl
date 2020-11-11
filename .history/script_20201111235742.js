window.onscroll = function() {myFunction()};
window.onscroll = function() {myFunction1()};


function myFunction(){

 if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.querySelector(".art1").className = "test";
  } 
  
  

}

function myFunction1(){
   
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) {
       document.getElementById("bar").style.padding = "5px 5px;"
     } else{
        document.getElementById("bar").style.padding = "30px 15px;"
     }
     
     console.log("dupa")
   
   }