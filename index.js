
document.addEventListener("DOMContentLoaded", () =>{
    const container = document.querySelector("#container");
    const resetBtn = document.querySelector("#resetBtn");


    function createGrid(size) {
        container.innerHTML = '';
         const squareSize = 560 / size;

        for(let i = 0; i < size * size; i++){
            const square = document.createElement("div")
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            container.appendChild(square)

        }
    }

    resetBtn.addEventListener("click", ()=>{
        let newSize = prompt("Enter a new size (1 - 100)");
        newSize = parseInt(newSize);
        if(newSize >= 1 && newSize <= 100 ){
            createGrid(newSize)
        }else{
            alert("Please enter a number between 1 - 100")
        }
    })
    createGrid(16)


})