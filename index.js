const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myDrills = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]


inputBtn.addEventListener("click", function() {
    myDrills.push(inputEl.value)
})
let listItems = ""
for (let i = 0; i < myDrills.length; i++) {
    listItems += "<li>" + myDrills[i] + "</li>"
}
ulEl.innerHTML = listItems
