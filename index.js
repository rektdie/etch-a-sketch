const container = document.querySelector(".container");

const cHeight = 16;
const cWidth = 16;

const sHeight = container.clientHeight / cHeight;
const sWidth = container.clientWidth / cWidth;

const paintColor = "black";


for (let i = 0; i < cHeight; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < cWidth; j++) {
        const square = document.createElement("div");
        square.style.height = `${sHeight}px`;
        square.style.width = `${sWidth}px`;
        square.style.outline = "1px solid black";

        row.appendChild(square);
    }
    
    container.appendChild(row);
}