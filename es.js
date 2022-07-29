const pDiv = document.querySelector(".parent");

startSketch(); 

/*generate sketchpad and listeners */
function startSketch(width=16, height=16) {
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
    /* add here*/
    lockSketch(); 
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


function lockSkech() {

}

/*function changeGrid(size) {
const childDiv = document.querySelectorAll(".childStyle");
    childDiv.forEach((div) => childDiv.setAttribute("style, ))
childDiv.forEach((div) => div.setAttribute("style", `height: ${size}`, `width: ${size}`))

}*/




/*change grid size
change color */