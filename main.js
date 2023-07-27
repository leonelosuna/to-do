let btn = document.querySelector("button")
let ul = document.querySelector("ul")

btn.addEventListener("click", function(){
    let task = document.querySelector("input").value
    
    if (task.trim() !== "") {
        let li = document.createElement("li")
        li.textContent = task
        ul.appendChild(li)
        li.appendChild(addDeleteBtn()) // <li>  texto  <button> </li>
        ul.appendChild(li)
    }
    else{
        alert("Error!");
    }

    
})

function addDeleteBtn(){
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"

    deleteBtn.addEventListener("click", (e)=>{
        let item = e.target.parentElement
        ul.removeChild(item)
    })
    return deleteBtn
}
