function myFunction(){
    if(document.body.scroll > 100 || document.documentElement.scrollTop > 100){
        document.querySelector(".art1").className = "test";

    }else{
        document.querySelector(".art1").className = " ";
    }
}