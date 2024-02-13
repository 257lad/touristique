

const showContact = () =>{
    document.getElementById("icon-bar").style.display = "grid";
    document.getElementById("icon-bar").style.transform = "translateY(0)";
    document.getElementById("modal-email").style.display = "none";
    document.getElementById("modal-phone").style.display = "grid";
}
const showEmail = () =>{
    document.getElementById("icon-bar").style.display = "grid";
    document.getElementById("icon-bar").style.transform = "translateY(0)";
    document.getElementById("modal-phone").style.display = "none";
    document.getElementById("modal-email").style.display = "grid";
}
const hide = () =>{
    document.getElementById("icon-bar").style.transform = "translateY(-1000px)";
    // document.getElementById("icon-bar").style.display = "none";
}




