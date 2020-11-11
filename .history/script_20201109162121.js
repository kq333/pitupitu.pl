window.onscroll = function() {myFunction()};

alert("Page is loaded");
function myFunction(){
   

    if(document.body.scroll > 250 || document.documentElement.scrollTop > 250){
        document.querySelector(".art1").className = "test";

    }else{
        document.querySelector(".art1").className = "";
    }
}

