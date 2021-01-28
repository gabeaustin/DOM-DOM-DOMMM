document.addEventListener("DOMContentLoaded", function() {
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Add Square");
    button.appendChild(buttonText);
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.style.border = "1px solid black";
        div.className = "flex-container";
        div.style.display = "flex";
        div.style.flexDirection = "row";

        
    })
})