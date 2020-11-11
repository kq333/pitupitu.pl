window.onscroll = function() {myFunction()};


function myFunction(){
    if(document.body.scroll > 230 || document.documentElement.scrollTop > 230){
        document.querySelector(".art1").className = "test";

    }else{
        document.querySelector(".art1").className = "";
    }
}