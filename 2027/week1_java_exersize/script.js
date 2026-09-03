//ex1
function ex1() {
    let ex1in = document.getElementById("ex1in");
    ex1in = parseInt(ex1in.value);
    console.log("exerecise 1 answer:");
    console.log((Math.round((ex1in-32)*(5/9)*100)/100)+"C");
    document.getElementById("ex1r").innerHTML = (Math.round((ex1in-32)*(5/9)*100)/100)+"C";
}

//ex2
function ex2() {
    let ex2in = document.getElementById("ex2in").value.split(", ").map(Number);
    let sumof_numbers = 0;
    for (const number of ex2in) {
        if (number % 2 === 0) { 
            sumof_numbers += number;
        }
    }
    console.log(sumof_numbers);
    document.getElementById("ex2r").innerHTML = sumof_numbers;
}

//ex3

function ex3() {
    let ex3in = document.getElementById("ex3in").value.split(", ");
    if (ex3in)
    console.log("Hello, my name is " + ex3in[0] + " i probably have a family name aswell instead of a middle name wich should be" + ex3in[1] + " unless you wrote my name witout a coma. Anyways I am" + ex3in[2] + " years old and live in" + ex3in[3] + ". i do wonder how you got all of that info about me.");
    document.getElementById("ex3r").innerHTML = "Hello, my name is " + ex3in[0] + " i probably have a family name aswell instead of a middle name wich should be " + ex3in[1] + " unless you wrote my name witout a coma. Anyways I am " + ex3in[2] + " years old and live in " + ex3in[3] + ". i do wonder how you got all of that info about me."
}

//ex4
function ex4() {
    console.log(document.getElementById("ex4in").value.split("").reverse().join(""));
    document.getElementById("ex4r").innerHTML = document.getElementById("ex4in").value.split("").reverse().join("");
}

//ex5
function ex5() {
    let ex5in = document.getElementById("ex5in").value.split(", ").map(Number);
    let ex5out= ex5in[0];
    for (i of ex5in) {
        if (i > ex5out) {
            ex5out = i;
        }
    }
    console.log(ex5out);
    document.getElementById("ex5r").innerHTML = ex5out;
}

//ex6
function ex6() {
    let ex6in = document.getElementById("ex6in").value.split(", ").map(Number);
    let ex6r = [];
    for (i of ex6in) {
        if (i>=0) {
            ex6r.push(i);
        }
    }
    if (ex6r.length === 0) {
        ex6r = "what a lie you've told me, there are no positive numbers in this list";
    }
    console.log(ex6r);
    document.getElementById("ex6r").innerHTML = ex6r;
}