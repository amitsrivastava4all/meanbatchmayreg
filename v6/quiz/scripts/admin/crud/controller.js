window.addEventListener('load',init);
function init(){
    isLogin();
bindEvents();
printCount();
enableDisable(true);
}
const enableDisable =isMarked=>
    document.querySelector('#delete').disabled=isMarked;


function printCount(){
    let markCount = questionOperations.countMark();
    enableDisable(markCount>0?false:true);
    document.querySelector('#mark').innerText = markCount;
    document.querySelector('#total').innerText = questionOperations.questions.length;
    document.querySelector('#unmark').innerText = questionOperations.questions.length - questionOperations.countMark();
}
function deleteRecord(){
    let tr = this.parentNode.parentNode;
    tr.classList.toggle('alert-danger');
    //tr.className = 'alert-danger';
    let id = this.getAttribute('qid');
    questionOperations.mark(id);
    printCount();
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
function deleteQuestion(){
    questionOperations.deleteMarked();
    printCount();
    printTable();
}
function printTable(){
    let tbody = document.querySelector('#questionbody');
    tbody.innerHTML='';
    questionOperations.questions.forEach(printQuestion);
}
function bindEvents(){
    document.querySelector('#add')
    .addEventListener('click',addQuestion);
    document.querySelector('#delete').addEventListener('click',deleteQuestion);
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
        if(key=='isMarked'  || key=='toggle'){
            continue;
        }
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
    printCount();
}