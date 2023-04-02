const keyBoard = document.querySelector(".btn");

keyBoard.addEventListener("keyup",(e)=>{
    let ele1 = document.getElementById("text2");
    let ele2 = document.getElementById("text1");
    ele2.innerHTML = "value is" +" "+e.keyCode;
    ele1.innerHTML = "you pressed"+" "+e.key
});

