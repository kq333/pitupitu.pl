window.onscroll = function() {myFunction()};


function myFunction(){
   
let i = 0;
 

 if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.querySelector(".art1").className = "test";
  } if (document.body.scrollTop < i ) {
    document.getElementById("bar").className = "test";
   
}
}

