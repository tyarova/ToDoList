 var tickets = document.getElementById('ticket-first-col');
 var itemClassName = 'item';

 function closeModal() {
    modal.style.display = "none";
  }

 class Ticket{
    constructor(parent, itemClassName){
         var child = document.createElement("div");
         this.parent = parent;
         this.child = child;
         var name = document.getElementById("options").value;
         this.name = name;
         this.itemClassName = itemClassName;
         var itemCreated = false;
         this.itemCreated = itemCreated;
         this.createNew();
    };

    createNew(){
        this.child.innerHTML = this.name;
        this.child.className = this.itemClassName+' '+this.name;
        this.parent.appendChild(this.child);
        this.itemCreated = true;

        if(this.itemCreated){
            var modalWindow = new CreateNewItemWindow();
            modalWindow.closeModal();
        }
    };
 }

document.getElementById('crTicket').addEventListener("click", function handleClick(){
    new Ticket(tickets, itemClassName);
}); 
document.getElementById('cnTicket').addEventListener('click', function() {
    modal.style.display = "none";
  });