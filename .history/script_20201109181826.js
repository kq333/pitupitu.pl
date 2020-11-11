window.onscroll = function() {myFunction()};


function myFunction(){
   

    if(document.body.scroll > 0 || document.documentElement.scrollTop > 200){
        document.querySelector(".art1").className = "test";

    }
    else if(document.body.scroll > 200 || document.documentElement.scrollTop > 0){
        document.querySelector(".art1").className = "art1";

    }
}

