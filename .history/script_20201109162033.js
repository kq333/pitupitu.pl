window.onscroll = function() {myFunction()};


function myFunction(){
    alert("Page is loaded");

    if(document.body.scroll > 250 || document.documentElement.scrollTop > 250){
        document.querySelector(".art1").className = "test";

    }else{
        document.querySelector(".art1").className = "";
    }
}

console.log("sdsd")