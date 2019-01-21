function createItem(){
    var selectedValue = document.getElementById("options").value;
    var item = document.createElement("div");
    item.className = "item";
if(selectedValue == '0'){
        item.id = 'work'
        item.innerHTML = "WORK";
}else if(selectedValue == '1'){
    item.id = 'life'
    item.innerHTML = "LIFE";
}else if(selectedValue == '2'){
        item.id = 'fun'
        item.innerHTML = "FUN";
}
var tickets = document.getElementById('ticket-first-col');
tickets.appendChild(item);
}

document.getElementById('crTicket').addEventListener("click", createItem);
document.getElementById('cnTicket').addEventListener('click', function() {
    modal.style.display = "none";
  });