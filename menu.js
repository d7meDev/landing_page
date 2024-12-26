let menuButton = document.getElementById("menuButton");
let menuList = document.querySelector(".hide");
function menu(){
   if(menuButton.classList.contains("bx-menu")){
          menuButton.classList.replace("bx-menu","bx-x");
          menuButton.style.position = "fixed"
          menuButton.style.top = "1vh";
          menuButton.style.right = "1vw";

          menuList.classList.replace("hide","menuList");
   }
   else{
    menuButton.classList.replace("bx-x","bx-menu");
    menuList.classList.replace("menuList","hide");
    menuButton.style.position = "static"
    
   }
}