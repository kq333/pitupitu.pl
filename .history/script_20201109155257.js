window.onscroll = function() {myFunction()};


function myFunction(){
    if(document.body.scroll > 200 || document.documentElement.scrollTop > 200){
        document.querySelector(".art1").className = "test";

    }else{
        document.querySelector(".art1").className = "";
    }
}