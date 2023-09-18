const body = document.querySelector("#top")
for(let i=1;i<=16;i++){
    let row = document.createElement("div");
    row.classList.add("row")
    body.appendChild(row);
    for(let j=0;j<16;j++){
        let cell=document.createElement("div");
        cell.id=`${i} ${j}`;
        cell.addEventListener("mouseover", () => cell.style.backgroundColor="black")
        row.appendChild(cell)
    }
}   
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let resolution = Number(prompt("Resolution (one axis)?"));
    draw(resolution);

})

function draw(resolution){
    const top = document.querySelector("#top");
    top.textContent="";
    for(let i=1;i<=resolution;i++){
        let row = document.createElement("div");
        row.classList.add("row")
        body.appendChild(row);
        for(let j=0;j<resolution;j++){
            let cell=document.createElement("div");
            cell.id=`${i} ${j}`;
            cell.addEventListener("mouseover", () => cell.style.backgroundColor="black")
            row.appendChild(cell)
        }
    }   
}