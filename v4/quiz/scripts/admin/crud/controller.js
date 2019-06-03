window.addEventListener('load',init);
function init(){
    isLogin();
bindEvents();
}
function deleteRecord(){
    let tr = this.parentNode.parentNode;
    tr.classList.toggle('alert-danger');
    //tr.className = 'alert-danger';
    console.log('Delete Record call ',this.getAttribute('qid'));
}
function editRecord(){
    console.log('Edit Record call');
}
function createIcon(id,className,fn){
    let icon =document.createElement('i');
    icon.className = `fa ${className} mr-2`;
    icon.addEventListener('click',fn);  
    icon.setAttribute('qid',id); // <i qid=1001>
    return icon;
}
function bindEvents(){
    document.querySelector('#add')
    .addEventListener('click',addQuestion);
}
function isLogin(){
    if(localStorage.user && localStorage.user.trim().length>0){
        document.querySelector('#userid').innerText = localStorage.user;
    }
    else{
        location.href="login.html";
    }
}
function printQuestion(questionObject){
    let tbody = document.querySelector('#questionbody');
    let tr = tbody.insertRow();
    let index = 0;
    for(let key in questionObject){
        if(key=='options'){
            let options = questionObject[key];
            for(let option of options){
                tr.insertCell(index).innerText = option;
                index++;
            }
        continue;
        }
        tr.insertCell(index).innerText = questionObject[key];
        index++;
    }  // Loop Ends
    let cell = tr.insertCell(index);
    cell.appendChild(createIcon(questionObject.id,'fa-trash',deleteRecord));
    cell.appendChild(createIcon(questionObject.id,'fa-pencil',editRecord));
}
function addQuestion(){
    var id = document.querySelector("#id").value;
    var name = document.querySelector("#name").value;
    var optionA = document.querySelector("#optiona").value;
    var optionB = document.querySelector("#optionb").value;
    var optionC = document.querySelector("#optionc").value;
    var optionD = document.querySelector("#optiond").value;
    var options = [optionA,optionB,optionC,optionD];
    var rans = document.querySelector("#rans").value;
    var score = document.querySelector("#score").value;
    let questionObject = questionOperations.add(id, name, options,rans,score);
    printQuestion(questionObject);
    console.log(`id is ${id} Name is ${name}`);
}