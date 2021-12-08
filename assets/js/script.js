function newElement() { // cria uma nova linha na lista com a informação do input 
    
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myList").appendChild(li);
    
    if (inputValue === '') {
    alert("Escreva alguma coisa antes de apertar Add");
    } 
    else {
    document.getElementById("myList").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    }

