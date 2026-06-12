function addnode() {
    ul = document.querySelector("#webnode ul")
    li = document.createElement("li");
    li.innerHTML = document.getElementById("content").value
    position = parseInt(document.getElementById("position").value)
    ul.insertBefore(li, ul.children[position-1])
}
function removenode() {
    ul = document.querySelector("#webnode ul")
    position = document.getElementById("position1").value
    ul.children[position-1].remove()
}
function modifynode() {
    ul = document.querySelector("#webnode ul")
    position = parseInt(document.getElementById("position2").value)
    newcontent = document.getElementById("newcontent").value
    ul.children[position-1].innerHTML = newcontent
}