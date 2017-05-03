function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
}

function countBodyChildren() {
    var bodyElement = document.getElementsByTagName("body")[0];
    alert(bodyElement.childNodes.length)
}
window.onload = countBodyChildren