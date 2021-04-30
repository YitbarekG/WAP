// ===================================Question 1 using object.Create
let Student = {
    fname : "Default",
    lname : "Default",
    grades : [],
    inputNewGrade : function(grade){ this.grades.push(grade);},
    computeAverage : function(){ return this.grades.reduce( function(a1,cur,i,arr) {return a1+cur/arr.length;} , 0);}
}



let st1 = Object.create(Student);
    st1.fname = "a1";
    st1.lname = "b1";
    st1.grades = [1.8,2.9,3.0];
    console.log(st1.computeAverage());
    st1.inputNewGrade(4);
    console.log(st1.computeAverage());


let st2 = Object.create(Student);
    st2.fname = "a2";
    st2.lname = "b2";
    st2.grades = [1,2,3];
    console.log(st2.computeAverage());
    st2.inputNewGrade(2);
    console.log(st2.computeAverage());

let st3 = Object.create(Student);
    st3.fname = "a3";
    st3.lname = "b3";
    st3.grades = [2,3,4];
    console.log(st3.computeAverage());
    st3.inputNewGrade(3);
    console.log(st3.computeAverage());


////================================== Question 2 using Constructor Function
function Student(fname, lname, grades){
    this.fname = fname;
    this.lname = lname;
    this.grades= grades;
}


Student.prototype.sortGrade = function(){return Array.prototype.sort.call(this.grades, function(a,b){return a-b});}
Student.prototype.computeAverage = function(){return this.grades.reduce( function(a1,cur,i,arr) {return a1+cur/arr.length;} , 0);}
Student.prototype.inputNewGrade =  function (grade){this.grades.push(grade);}

Student.prototype.c =function(){ return Student.prototype.computeAverage.call(this) + 100; };

let students = [
    new Student('a1','b',[18,29,30]),
    new Student('a2','b',[46,26,36,1,4,8,1331]),
    new Student('a3','b',[13,24,35]),
    new Student('a4','b',[12,22,32]),
    new Student('a5','b',[11,21,31]),
];


console.log( students[0].computeAverage());

students[0].inputNewGrade(23);
console.log( students[0].computeAverage());

console.log(students[0].sortGrade());

console.log("==>"+students[1].sortGrade());
console.log(students[3].computeAverage());
console.log(students[3].c());


////==============================Question 4 Linked List
/////////////////Using Object Literal
let LL = {
    head : null,
    add : function(n){
        newNode = {value:n, next:null};
        if (this.head===null){
            this.head= newNode;
        }
        else{
            temp = this.head;
            while(temp.next!=null){
                temp= temp.next;
            }
            temp.next = newNode;
        }
    },

    print: function(){
        if(this.head === null){
            console.log("Emplty List");
        }
        else{
            temp = this.head;
            console.log()
            while(temp!=null){
                console.log("==>"+temp.value);
                temp = temp.next; 
            }
            
        }
    },
    remove :  function(v){
        temp = this.head;
        if(temp.value===v){this.head=temp.next; temp = null;}
    
        while(temp != null){
            temp2 = temp;
            temp=temp.next;
            if(temp.value===v){
                temp2.next = temp.next;
                temp=null;
            }
        } 
    }
}


let l1 = Object.create(LL);
l1.add(3);
l1.add(5);
l1.add(6);
l1.print();
l1.remove(5);
l1.print();

let l2 = Object.create(LL);
l2.add(13);
l2.add(15);
l2.add(16);
l2.print();
l2.remove(15);
l2.print();

////using Constructor function

function LinkedList(){
    this.head  = null;
}

LinkedList.prototype.add = function(n){
    newNode = {value:n, next:null};
    if(this.head === null){
        this.head = newNode;
    }
    else{
        
        temp = this.head;
        while(temp.next!=null){
            temp = temp.next; 
        }
        temp.next = newNode;
        
    }
}

LinkedList.prototype.print = function(){
    if(this.head === null){
        console.log("Emplty List");
    }
    else{
        temp = this.head;
        console.log()
        while(temp!=null){
            console.log("==>"+temp.value);
            temp = temp.next; 
        }
        
    }
}

LinkedList.prototype.remove = function(v){
    temp = this.head;
    if(temp.value===v){this.head=temp.next; temp = null;}

    while(temp != null){
        temp2 = temp;
        temp=temp.next;
        if(temp.value===v){
            temp2.next = temp.next;
            temp=null;
        }
    } 
}


l = new LinkedList();
l.add(11);
l.add(12);
l.add(13);
l.add(14);
l.add(15);
l.add(16);
l.print();
console.log();
l.remove(16);
l.print();
l.add(16);
console.log();
l.print();

// ========================================Question 3 Array.sort
Array.prototype.sort1 =function(){ this.sort((a,b)=> a - b)};

let x= [22,14,5,1,8,62,7,76, -2, -4, 0];
x.sort1();
console.log(x);
