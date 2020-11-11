function myFunction(){
    if(document.body.scroll>300 || document.documentElement.scrollTop > 300){
        document.querySelector(".art1").className = "test";

    }else{
        document.querySelector(".art1").className = " ";
    }
}