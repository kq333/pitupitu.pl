window.onscroll = function() {myFunction()};


function myFunction(){
    if(document.body.scroll > 50 || document.documentElement.scrollTop > 50){
        document.querySelector(".art1").className = ".test";

    }else{
        document.querySelector(".art1").className = " ";
    }
}