window.addEventListener('load',init);
function init(){
    isLogin();
bindEvents();
}
function bindEvents(){
    document.querySelector('#add').addEventListener('click',addQuestion);
}
function isLogin(){
    if(localStorage.user && localStorage.user.trim().length>0){
        document.querySelector('#userid').innerText = localStorage.user;
    }
    else{
        location.href="login.html";
    }
}
function addQuestion(){
    var id = document.querySelector("#id").value;
    var name = document.querySelector("#name").value;
    var optionA = document.querySelector("#optiona").value;
    var optionB = document.querySelector("#optionb").value;
    var optionC = document.querySelector("#optionc").value;
    var optionD = document.querySelector("#optiond").value;
    var rans = document.querySelector("#rans").value;
    var score = document.querySelector("#score").value;
    console.log(`id is ${id} Name is ${name}`);
}