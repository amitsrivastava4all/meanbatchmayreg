const questionOperations = {
    questions : [],
    search(id){
        return this.questions.find(questionObject=>questionObject.id==id);
        //let obj = this.questions.find(questionObject=>questionObject.id==id);
        //return obj;    
    },
    deleteMarked(){
        this.questions = this.questions.filter(questionObject=>questionObject.isMarked==false);
        return this.questions;
    },
    countMark(){
        return this.questions.filter(questionObject=>questionObject.isMarked).length;
    },
    mark(id){
        this.search(id).toggle();
        //let obj = this.search(id) ;
        //obj.toggle();
        //obj.isMarked = !obj.isMarked;
    },
    add(id , name, options,rans,score){
       
        let question = new Question(id , name, options,rans,score);
        this.questions.push(question);
        console.log("Record Added ",this.questions);
        console.log("Record Added:::: "+this.questions);
        return question;
    },
    getLastObject(){
        if(this.questions.length>0){
        return this.questions[this.questions.length-1];
        }
        else{
            return null;
        }
    }

}