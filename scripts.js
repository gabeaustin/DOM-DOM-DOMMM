document.addEventListener("DOMContentLoaded", function () {
    let addSquareButton = document.createElement("button");
    let buttonText = document.createTextNode("Add Square");
    addSquareButton.appendChild(buttonText);
    document.body.appendChild(addSquareButton);
    // document.body.appendChild(addSquareButton);

    addSquareButton.addEventListener("click", function () {
        let squareContainer = document.createElement("div");
        squareContainer.id = "square-container";
        
        document.body.appendChild(squareContainer);
    
        // document.body.appendChild(addSquareButton);

        let addSquareDiv = document.createElement("div");
        addSquareDiv.className = "add-square-div";
        document.body.appendChild(addSquareDiv);
        // document.body.appendChild(addSquareDiv);
})




    // })
})






// document.addEventListener("DOMContentLoaded", function () {
//     const squareContainer = document.getElementById("square-container");
//     const addSquareButton = document.getElementById("add-square");

//     addSquareButton.addEventListener("click", function () {
//         let squareContainerDiv = document.createElement("div");
//         div.className = "square-container";
//         squareContainerDiv.appendChild(div);

//         let button = document.createElement("button");
//         button.id = "add-square";

//         let div = document.createElement("div");
//         div.className = "square";
//         div.style.border = "1px solid black";


//         squareContainer.appendChild(div);



/*
        // div.style.display = "flex";
        // div.style.flexDirection = "row";
        // div.style.alignContent = "flex-start";
        // div.style.flexWrap = "wrap";




    })
})

*/