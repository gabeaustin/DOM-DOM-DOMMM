document.addEventListener("DOMContentLoaded", function() {
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Add Square");
    button.appendChild(buttonText);
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        console.log("clicked");

    })
})