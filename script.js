var imenu = document.getElementById("imenu")
var menu = document.getElementById("menu")

menu.style.right = "-100%";

imenu.onclick = function(){
    if(menu.style.right == "-100%"){
        menu.style.right = "0%";
    }
    else{
        menu.style.right = "-100%";
    }
}

navdugme1.onclick = function(){
    menu.style.right = "-60%";
}
navdugme2.onclick = function(){
    menu.style.right = "-60%";
}
navdugme3.onclick = function(){
    menu.style.right = "-60%";
}
navdugme4.onclick = function(){
    menu.style.right = "-60%";
}
navdugme5.onclick = function(){
    menu.style.right = "-60%";
}