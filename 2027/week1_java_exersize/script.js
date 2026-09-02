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
    let passed_the_number_check = [];
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
//Dave, Doe, 23, japan or greenland im not quite sure

function ex3() {
    let ex3in = document.getElementById("ex3in").value.split(", ");
    if (ex3in)
    console.log("Hello, my name is " + ex3in[0] + " i probably have a family name aswell instead of a middle name wich should be" + ex3in[1] + " unless you wrote my name witout a coma. Anyways I am" + ex3in[2] + " years old and live in" + ex3in[3] + ". i do wonder how you got all of that info about me.");
    document.getElementById("ex3r").innerHTML = "Hello, my name is " + ex3in[0] + " i probably have a family name aswell instead of a middle name wich should be " + ex3in[1] + " unless you wrote my name witout a coma. Anyways I am " + ex3in[2] + " years old and live in " + ex3in[3] + ". i do wonder how you got all of that info about me."
}