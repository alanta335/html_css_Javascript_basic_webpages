
var username = "";
function popup() {
    if(username==""){
    var popup = document.getElementById('mypopup');
    popup.style.visibility = "visible";
    }
    else{
        subm();
    }
}
function changeImagetosmile(){
    document.getElementById("dogimag").src = "imgsmile.png";
}

function subm(){
    clearTimeout(id);
    username = document.getElementById("username").value;
    document.getElementById("dogwelcome").innerText = "Hi " + username;
    changeImagetosmile();
    var popup = document.getElementById('mypopup');
    popup.style.visibility = "hidden";
    setTimeout(changetonormal,5000);
}
function change() {
    document.getElementById("dogimag").src = "imgsad.png";
    document.getElementById("dogwelcome").innerText = "Click on me";

}
function changetonormal() {
    document.getElementById("dogimag").src = "img.png";
    document.getElementById("dogwelcome").innerText = "";

}
var id;
window.onload = function () {
    id = setTimeout(change, 9000);
};