var modal = document.getElementById("myModal");
var createBtn = document.getElementById("myBtn");
var closeBtn = document.getElementById("close");

class CreateNewItemWindow{
  openModal(){
  modal.style.display = "block";
  }

  closeModal() {
    modal.style.display = "none";
  }
}

var modalWindow = new CreateNewItemWindow();
createBtn.addEventListener('click', modalWindow.openModal);
closeBtn.addEventListener('click', modalWindow.closeModal);
window.addEventListener('click', function(event){
  if (event.target == modal){
   modalWindow.closeModal();
  }
});

  