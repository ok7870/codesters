function ex1() {
    var button = document.getElementById("ex1_button");
    button.innerHTML = "clicked";
}
//------ x1

function ex2ppara1() {
    let paragraph1 = document.getElementById("ppara1");
    let paragraph2 = document.getElementById("ppara2");
    paragraph1.style.display = "block";
    paragraph2.style.display = "none";
}

function ex2ppara2() {
    let paragraph1 = document.getElementById("ppara2");
    let paragraph2 = document.getElementById("ppara1");
    paragraph1.style.display = "block";
    paragraph2.style.display = "none";
}

//------ x2
document.getElementById("ex3colordiv").style.backgroundColor= document.getElementById("color_selector").value;

colorselector = document.getElementById("color_selector")
colorselector.onchange = function() {
    if (colorselector.value === "nuke") {
        document.body.style.display = "none";
    }
    else {
        document.getElementById("ex3colordiv").style.backgroundColor= colorselector.value;
    }

}

//------- x3

addEventListener("contextmenu", (event) => /*for my own sake, this => creates a comand function(event) {} so i can use the event later on*/ {
  event.preventDefault();
});

ex4counter.addEventListener("mousedown", (press) => {
    if (press.button === 0) {
        ex4counter.innerHTML = parseInt(ex4counter.innerHTML)+1
    }
    else if (press.button ===2) {
        ex4counter.innerHTML = parseInt(ex4counter.innerHTML)-1
    }

})

//------ x4

