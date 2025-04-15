
function StartRun(){
    HideformShowgame()
    localStorage['Name'] = document.getElementById("fname").value
    document.getElementById("playername").textContent = "Name: "+localStorage['Name']
    makeRows(8,8,"displaycontainer");
    makeRows(4,5,"cardscontainer");
}

function HideformShowgame(){
    document.getElementById("game").style.display = "block";
    document.getElementById("startform").style.display = "none";
}

function makeRows(rows,cols,id) {
    const container = document.getElementById(id);
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for(let c = 0; c < (rows * cols); c++){
        let cell = document.createElement("div");
        cell.innerText = ('');
        container.appendChild(cell).className = "grid-item";
    }
}
