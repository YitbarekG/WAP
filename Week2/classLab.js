//===========================================Question 1
//clock using class
class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
let clock = new Clock({ template: 'h:m:s' });
clock.start();
setTimeout(clock.stop.bind(clock), 10000);

//clock using constructor function
function Clock({ template }) {

    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    this.stop = function () {
        clearInterval(timer);
    };
    this.start = function () {
        render();
        timer = setInterval(render, 1000);
    };

}

let clock = new Clock({ template: 'h:m:s' });
clock.start();
setTimeout(clock.stop.bind(clock),10000);


//======================================================Question 2 (Quiz application)=======================
class Student{
    constructor(id){
    this.Id = id;
    this.answers = [];
}

    addAnswer = function(q){
    this.answers.push(q);
}
}

class Question{
    constructor(id, ans){
    this.qid = id;
    this.answer = ans;
}
}

class Quiz{
    constructor(ques, stus){
    this.questions = ques;
    this.students  =stus;
}


scoreStudentBySid = function(sId){
    let stu = null;
    for(let i =0 ; i<this.students.length; i++){
        if(this.students[i].Id === sId){
            stu = this.students[i];
        }
    }
    let score = 0;
    for(let i = 0; i<stu.answers.length;i++){
        for(let j = 0; j<this.questions.length;j++){
            
            if(stu.answers[i].qid===this.questions[j].qid){
                if(stu.answers[i].answer===this.questions[j].answer){score++;}
            }
        }
    }
    return score;
}

getAverageScore = function(){
    let total = 0;
    for(let i =0 ; i<this.students.length; i++){
        
        total+=this.scoreStudentBySid(this.students[i].Id);
    }
    return total/=this.students.length;
}
}


const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);

console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
