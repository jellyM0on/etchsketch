const pDiv = document.querySelector(".parent");


function loadPage() {
generateGrids();
startSketch(); 
}
/*generate sketchpad and listeners */


function startSketch(width=10, height=10) {
for (i=1; i <= height; i++) {
        const setDiv = document.createElement("div"); 
        pDiv.appendChild(setDiv);
        setDiv.classList.add("divStyle");
        for (x=1; x <= width; x++) {
            const childDiv = document.createElement("div"); 
            setDiv.appendChild(childDiv);
            childDiv.classList.add("childStyle");
        }
    } 
    loadListeners();  
}

const divStyle = document.querySelectorAll(".divStyle")



function loadListeners() {
const childDiv = document.querySelectorAll(".childStyle");
childDiv.forEach((div) => 
    div.addEventListener("mouseover", () => {
        div.classList.add("hoverStyle");
    })
)
childDiv.forEach((div) => 
    div.addEventListener("mouseout", () => {
        div.classList.remove("hoverStyle");
    })
) 
childDiv.forEach((div) => 
    div.addEventListener("click", () => {
        div.classList.add("clickStyle");
    })
) 
childDiv.forEach((div) => 
    div.addEventListener("dblclick", () => {
        div.classList.remove("clickStyle");
    })
) 
}
    
/*functions to change sketchpad dimensions*/
const buttonPad = document.querySelector(".buttonPad");
buttonPad.addEventListener("click", () => {
    let widthSketch = prompt("Enter width size: ");
    while (widthSketch > 100 || widthSketch == 0){
        widthSketch = prompt("Number cannot be more than 100 or 0.\ Enter width size: ");
    }
    let heightSketch = prompt("Enter height size: ");
    while (heightSketch> 100 || heightSketch == 0) {
        heightSketch = prompt("Number cannot be more than 100 or 0.\ Enter width size: ");
    }
    changeSketch(widthSketch, heightSketch); 
}); 

function changeSketch(width, height) {
    const sketchPad = document.querySelectorAll(".divStyle"); 
    sketchPad.forEach((div) =>  div.remove())
    startSketch(width,height);
}

const buttonGrid = document.querySelector(".buttonGrid"); 
buttonGrid.addEventListener("click", () => {
    let gridSize = prompt("Enter size: ");
    while (gridSize > 100 || gridSize == 0){
        gridSize = prompt("Number cannot be more than 100 or 0.\ Enter size size: ");
    }
    changeGrid(gridSize);
});

function changeGrid(size) {
    size = `${size}` + "px"; 
    document.documentElement.style.setProperty("--grid-height", size);
    document.documentElement.style.setProperty("--grid-width", size);
    console.log(size); 
}


const buttonLock = document.querySelector(".buttonLock");
buttonLock.addEventListener("click", () => {
    defaultSketch()}); 

function defaultSketch() {
    document.documentElement.style.setProperty("--default-grid-height", "100%");
    document.documentElement.style.setProperty("--default-grid-width", "100%");
    document.documentElement.style.setProperty("--default-height-container", "500px");
    document.documentElement.style.setProperty("--default-width-container", "500px");
    document.documentElement.style.setProperty("--grid-height", "100%");
    document.documentElement.style.setProperty("--grid-width", "100%");

   } 



const colorSection = document.querySelector(".colorSection");
const colorArray = ["red", "green", "blue", "yellow", "orange", "pink", "purple", "black", "white"];
function generateGrids(){
    for (i=0; i <= 8; i++) {
        const setDiv = document.createElement("div"); 
        colorSection.appendChild(setDiv);
        setDiv.classList.add("colorStylediv");
        setDiv.style.cssText = `background-color: ${colorArray[i]}`;
    } 
}


        


loadPage(); 





