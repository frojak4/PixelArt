const app = document.getElementById("app");
let container;


model = {
    gridSize: undefined,
    currentColor: 'black',
}

startScreen()
function updateView() {
    app.innerHTML = /*HTML*/`
        <div id="container"></div>
        <div id="colorSelector">
            <div onclick="selectColor('black')" class="svart"></div>
            <div onclick="selectColor('white')" class="kvit"></div>
            <div onclick="selectColor('blue')" class="blå"></div>
            <div onclick="selectColor('red')" class="rød"></div>
            <div onclick="selectColor('green')" class="grønn"></div>
            <div onclick="selectColor('pink')" class="rosa"></div>
            <div onclick="selectColor('yellow')" class="gul"></div>
            <div onclick="selectColor('purple')" class="lilla"></div>
            <div onclick="selectColor('lightblue')" class="lyseblå"></div>

        </div>
    `
    genGrid(model.gridSize);
}

function startScreen() {
    app.innerHTML = /*HTML*/`
        <div class="overskrift">
        <h1>Pixel Editor</h1>
        </div>

        <div class="inputdiv">
            <h1> How many pixels would you like?</h1>
            <input type="number" min="0" max="32" oninput="model.gridSize = this.value" value="${model.gridSize ?? ''}">
            <button onclick="updateView()">Start</button>
        </div>
    `
}

function genGrid(number) {
    model.gridSize = number;
    let resolution = 500 / model.gridSize;

    let container = document.getElementById("container")
    for (let y = 0; y < model.gridSize; y++) {
        for (let x = 0; x < model.gridSize; x++) {
            container.innerHTML += /*HTML*/`
                <div class="rute" onclick="changeColor(this)"></div>
            `
        }
    }
    let ruter = document.querySelectorAll(".rute")
    ruter.forEach(ruter => ruter.style.height = resolution + "px");
    ruter.forEach(ruter => ruter.style.width = resolution + "px");
    
}

function changeColor(rute) {
    rute.style.backgroundColor = model.currentColor;

}

function selectColor(farge) {
    model.currentColor = farge;
}

