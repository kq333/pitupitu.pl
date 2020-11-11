window.onscroll = function() {myFunction()};


function myFunction(){
   

    if(document.body.scroll > 1 || document.documentElement.scrollTop > 300){
        document.querySelector(".art1").className = "test";

    }
   
}

