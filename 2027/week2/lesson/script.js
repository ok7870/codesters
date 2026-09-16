let paragraph = document.getElementById("randomparagraph");
document.getElementById("randomparagraph").innerHTML = "hello, this is a bit about <b>dom<b>"

async function sleep(time) {
    await new Promise(resolve => setTimeout(resolve, time));
}

async function changebuttoncolor() {
    console.log("button clicked");
    document.getElementById("div2").style.backgroundColor = "red";
    await sleep(2000);
    document.getElementById("div2").style.backgroundColor = "lightblue";
}

async function mousedown() {
    document.addEventListener("mousedown", function() {
        document.getElementById("angrybutton").innerHTML = "YOU SHALL NOT LIFT THY MOUSE";
    });
    document.addEventListener("mouseup", async function() {
        document.getElementById("angrybutton").innerHTML = "COWARD";
        await sleep(2000);
        document.getElementById("angrybutton").innerHTML = "";
    });
    
}

