const pDiv = document.querySelector(".parent");


for (i=1; i <= 16; i++) {
    const setDiv = document.createElement("div"); 
    pDiv.appendChild(setDiv);
    setDiv.classList.add("divStyle");
    for (x=1; x <= 16; x++) {
        const childDiv = document.createElement("div"); 
        setDiv.appendChild(childDiv);
        childDiv.classList.add("childStyle");
    }
}   