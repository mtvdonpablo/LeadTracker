const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
let myDrills = []
const drillsFromLocalStorage = JSON.parse(localStorage.getItem("myDrills"))
console.log(drillsFromLocalStorage)

if(drillsFromLocalStorage){
    myDrills = drillsFromLocalStorage
    render(myDrills)
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myDrills.push(tabs[0].url)
        localStorage.setItem("myDrills", JSON.stringify(myDrills))
        render(myDrills)
     });

})

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myDrills = []
    render(myDrills)
})
inputBtn.addEventListener("click", function() {
    myDrills.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myDrills", JSON.stringify(myDrills))
    render(myDrills)

})

function render(drills){
    let listItems = ""
    for (let i = 0; i < drills.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${drills[i]}'>
                ${drills[i]}
            </a>
        </li>
    `
    }
    ulEl.innerHTML = listItems
}
