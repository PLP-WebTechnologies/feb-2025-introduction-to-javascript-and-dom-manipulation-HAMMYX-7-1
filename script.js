function changeText() {
    const intro = document.getElementById("intro-text");
    intro.textContent = "The text has been changed using JavaScript!";
    intro.style.color = "darkgreen";
    intro.style.fontWeight = "bold";
    intro.style.backgroundColor = "#f0f8ff";
    intro.style.padding = "10px";
    intro.style.borderRadius = "5px";
}

function addElement() {
    const container = document.getElementById("dynamic-container");
    if (!document.getElementById("new-paragraph")) {
        const newPara = document.createElement("p");
        newPara.id = "new-paragraph";
        newPara.textContent = "This element was added dynamically!";
        newPara.style.color = "blue";
        container.appendChild(newPara);
    }
}

function removeElement() {
    const para = document.getElementById("new-paragraph");
    if (para) {
        para.remove();
    }
}

