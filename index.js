const container = document.querySelector(".container");

let colorMode = true;
let rainbowMode = false;
let eraseMode = false;
let grid = false;

createCanvas(16, 16);

//Creating the squares
function createCanvas(cHeight, cWidth){
    container.innerHTML = "";
    const sHeight = container.clientHeight / cHeight;
    const sWidth = container.clientWidth / cWidth;

    for (let i = 0; i < cHeight; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
    
        for (let j = 0; j < cWidth; j++) {
            const square = document.createElement("div");
            square.style.height = `${sHeight}px`;
            square.style.width = `${sWidth}px`;
            square.classList.add("square");
            if (grid) square.style.outline = "1px solid black";
    
            row.appendChild(square);
        }
        
        container.appendChild(row);
    }

    //Painting system
    const squares = document.querySelectorAll(".square");
    let isMouseDown = false;

    squares.forEach(square => {
        square.addEventListener("mousedown", () => {
            isMouseDown = true; 
            Paint(square);           
        });
        square.addEventListener("mouseup", () => {
            isMouseDown = false;
        });

        square.addEventListener("mouseenter", () => {
            if (isMouseDown){
                Paint(square);
            }
        });
    });
}

function Paint(square){
    let color = document.querySelector("#colorPicker");

    if (colorMode) {
        square.style.backgroundColor = color.value;
    } else if (rainbowMode) {
        color = (Math.floor(Math.random() * 0xFFFFFF)).toString(16);
        square.style.backgroundColor = `#${color}`;
    } else if (eraseMode) {
        color = "white";
        square.style.backgroundColor = color;
    }
}


//Size Slider
const label = document.querySelector(".label");
const slider = document.querySelector("#slider");
label.textContent = `${slider.value}x${slider.value}`;

slider.addEventListener("input", () => {
    label.textContent = `${slider.value}x${slider.value}`;
});

slider.addEventListener("change", () => {
    createCanvas(slider.value, slider.value);
});

//Buttons
const colorButton = document.querySelector("#colorMode");
const rainbowButton = document.querySelector("#rainbowMode");
const eraseButton = document.querySelector("#erase");
const clearButton = document.querySelector("#clear");
const gridBox = document.querySelector("#grid");

colorButton.addEventListener("click", () => {
    colorMode = true;
    rainbowMode = false;
    eraseMode = false;
});

rainbowButton.addEventListener("click", () => {
    colorMode = false;
    rainbowMode = true;
    eraseMode = false;
});

eraseButton.addEventListener("click", () => {
    colorMode = false;
    rainbowMode = false;
    eraseMode = true;
});

clearButton.addEventListener("click", () => {
    createCanvas(slider.value, slider.value);
});

gridBox.addEventListener("change", () => {
    const squares = document.querySelectorAll(".square");

    if (!grid) {
        squares.forEach(square => square.style.outline = "1px solid black");
        grid = true;
    } else {
        squares.forEach(square => square.style.outline = "none");
        grid = false;
    }
    
});