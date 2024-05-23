const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myDrills = []

let drillsFromLocalStorage = JSON.parse(localStorage.getItem("myDrills"))
console.log(drillsFromLocalStorage)

inputBtn.addEventListener("click", function() {
    myDrills.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myDrills", JSON.stringify(myDrills))
    renderDrills()

})

function renderDrills(){
    let listItems = ""
    for (let i = 0; i < myDrills.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${myDrills[i]}'>
                ${myDrills[i]}
            </a>
        </li>
    `
        
    }
    ulEl.innerHTML = listItems
}
