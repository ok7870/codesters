function newgame() {
    document.querySelectorAll("#game_section div").forEach(div => div.remove());
    document.querySelectorAll("#game_section p").forEach(p => p.remove());
    let height = parseInt(document.getElementById("height").value);
    let width = parseInt(document.getElementById("width").value);
    let treasure = [Math.floor(Math.random() * (height)), Math.floor(Math.random() * (width))];
    console.log("Treasure is at index: " + treasure);
    for(let i = 0; i < height; i++) {
        newrow = document.createElement("div");
        newrow.className = "row";
        newrow.id = "row" + i;
        document.getElementById("game_section").appendChild(newrow);

        for(let j = 0; j < width; j++) {
            newcol = document.createElement("button");
            newcol.className = "game_title";
            newcol.id = "row" + i + "col" + j;
            if(i == treasure[0] && j == treasure[1]) {
                newcol.addEventListener("click", function() {
                    wonmessage = document.createElement("p");
                    wonmessage.textContent = "You found the treasure! \n press new game to restar";
                    document.getElementById("game_section").appendChild(wonmessage);
                });
            }
            document.getElementById("row" + i).appendChild(newcol);
    }
    }
}