var db = [
    {
        q1: "Q1: What is the full form of HTML?",
        op1: "Hello To My Land",
        op2: "Hey Text Markup Language",
        op3: "HyperText Markup Language",
        op4: "Hypertext Markup Language",
        ans: "l4",
    },
    {
        q1: "Q2: JS stands for?",
        op1: "Just Script",
        op2: "Java Script",
        op3: "Job Source",
        op4: "None of these",
        ans: "l2"
    },
    {
        q1: "Q3: CSS Stands for?",
        op1: "Copy Style Sheet",
        op2: "Cat Style Sun",
        op3: "Canscading Style Sheet",
        op4: "None of these",
        ans: "l3",
    },
    {
        q1: "Q4: CS Stands for?",
        op1: "Copy Source",
        op2: "Computer Science",
        op3: "Cat Structure",
        op4: "None of theee",
        ans: "l2",

    },
    {
        q1: "Q5: Which tag is used for break line?",
        op1: "h1",
        op2: "p",
        op3: "Br",
        op4: "None of these",
        ans: "l3",
    },
]

var para = document.getElementById("para");
var lbl = document.querySelector("#lb1");
var lb2 = document.querySelector("#lb2");
var lb3 = document.querySelector("#lb3");
var lb4 = document.querySelector("#lb4");
var butt = document.querySelector("#butt");
var same = document.querySelectorAll(".same");
var empty = document.querySelector("#empty");

var count = 0;
var marks = 0;

para.innerHTML = db[count].q1;
lb1.innerHTML = db[count].op1;
lb2.innerHTML = db[count].op2;
lb3.innerHTML = db[count].op3;
lb4.innerHTML = db[count].op4;
butt.innerHTML = "SUBMIT";


var setter = () => {
    para.innerHTML = db[count].q1;
    lb1.innerHTML = db[count].op1;
    lb2.innerHTML = db[count].op2;
    lb3.innerHTML = db[count].op3;
    lb4.innerHTML = db[count].op4;
};
setter();

var selection = () => {
    var c;
    same.forEach((a) => {
        if (a.checked) {
            c = a.id;
        }
    })
    return c;
}

butt.addEventListener("click", () => {
    var s = selection();
    console.log(s);

    if (s == db[count].ans) {
        marks++;
    }
    count++;
    var rad = () => {
        same.forEach((d) => {
            d.checked = false;
        })
    }
    rad();


    if (count < db.length) {
        setter();
    }

    else {
        empty.innerHTML = `<h2>Your Marks: ${marks} / ${db.length}<h2/>`;
        butt.classList.add("buttn")
    }
});
