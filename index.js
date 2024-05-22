const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myDrills = []


inputBtn.addEventListener("click", function() {
    myDrills.push(inputEl.value)
    renderDrills()
    inputEl.value = ""
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
