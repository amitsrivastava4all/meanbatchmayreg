window.addEventListener('load',init);
function init(){
    isLogin();
}
function isLogin(){
    if(localStorage.user && localStorage.user.trim().length>0){
        document.querySelector('#userid').innerText = localStorage.user;
    }
    else{
        location.href="login.html";
    }
}