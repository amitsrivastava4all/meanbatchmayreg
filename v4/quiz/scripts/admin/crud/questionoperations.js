const questionOperations = {
    questions : [],
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