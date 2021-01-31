document.addEventListener("DOMContentLoaded", function() {
    let numOfSquares = 0;

    const addSquareButton = document.createElement("button");
    addSquareButton.textContent = "Add Square";
    document.body.appendChild(addSquareButton);

    addSquareButton.addEventListener("click", function() {
        numOfSquares++;

        const newSquare = document.createElement("div");
        newSquare.className = "square";
        newSquare.id = numOfSquares;
        newSquare.textContent = numOfSquares;

        newSquare.addEventListener("mouseenter", function() {
            
        })

        squareContainer.appendChild(newSquare);
    })

    document.body.appendChild(addSquareButton);

    const squareContainer = document.createElement("div");
    squareContainer.id = "square-container";
    document.body.appendChild(squareContainer);
})