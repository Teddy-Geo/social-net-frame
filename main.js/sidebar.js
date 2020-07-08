// Sidebar menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sideMenu = document.getElementById('sideMenu');

hamburgerBtn.addEventListener('click', () =>{
console.log('button clicked');
sideMenu.classList.toggle('open');
});

// User Massages menu toggle
const chatMsg = document.getElementById('chatMsg');
const chatBox = document.getElementById('chatBox');

chatMsg.addEventListener("click", () =>{
  console.log("Hello");
  chatBox.classList.toggle('slide');
});

 /* window.addEventListener('mouseup', function(e){

  if(e.target !== chatBox && e.target.parentNode != chatBox && e.target != chatMsg) {
    chatBox.style.display = 'none';
  }
}); */