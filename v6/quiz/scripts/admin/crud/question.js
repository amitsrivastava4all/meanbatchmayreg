// class Question{
//     constructor(id , name, options,rans,score){
//         this.id = id;
//         this.name = name;
//         this.options = options;
//         this.rans = rans;
//         this.score = score;
//     }
// }


    function Question(id , name, options,rans,score){
        this.id = id;
        this.name = name;
        this.options = options;
        this.rans = rans;
        this.score = score;
        this.isMarked = false;
    }
    Question.prototype.toggle=function(){
        this.isMarked= !this.isMarked;
    }




