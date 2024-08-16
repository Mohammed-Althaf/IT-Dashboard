document.addEventListener('DOMContentLoaded', (event) => {
    loadList(); 
});

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
        saveList(); 
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        saveList(); 
    }

    updateCount();
}

function updateCount() {
    var liElements = document.getElementsByTagName("LI");
    var count = liElements.length;
    
    // Update all elements with the class 'card'
    var cardElements = document.getElementsByClassName("card");
    for (var i = 0; i < cardElements.length; i++) {
        cardElements[i].innerText = count;
    }
}

function saveList() {
    var ul = document.getElementById("myUL");
    var liElements = ul.getElementsByTagName("LI");
    var listItems = [];

    for (var i = 0; i < liElements.length; i++) {
        var item = liElements[i];
        var text = item.firstChild.nodeValue;
        listItems.push(text);
    }

    localStorage.setItem("listItems", JSON.stringify(listItems));
}

function loadList() {
    var listItems = JSON.parse(localStorage.getItem("listItems")) || [];
    var ul = document.getElementById("myUL");

    listItems.forEach(function(itemText) {
        var li = document.createElement("li");
        var t = document.createTextNode(itemText);
        li.appendChild(t);

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        span.onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            saveList(); 
        }

        ul.appendChild(li);
    });

    updateCount();
}

// Add close button functionality to existing list items
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        saveList(); 
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
