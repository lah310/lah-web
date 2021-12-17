const cards = document.getElementById("Servidores");
const otro = document.getElementById("otro")
const bot = document.getElementById("bots");
const hamburguer = document.querySelector(".icon");
const countEl = document.getElementById('count');
const navMenu = document.querySelector(".navi-ul");

hamburguer.addEventListener("click", responsive);

function responsive(){
    navMenu.classList.toggle("active");
}





document.oncontextmenu = function () {
  return false;
};
onkeydown = (e) => {
  let tecla = e.which || e.keyCode;
  if (e.ctrlKey) {
    if (tecla === 70) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    if (tecla === 85) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    if (tecla === 83) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }}};

    window.onload = function(){
      $('#onload').fadeOut();
    }

 

   
    
    function updateVisitCount() {
      fetch('https://api.countapi.xyz/update/lah.rip/96a04f5e-0e38-4f78-b9c8-d1d0f665e5b4/?amount=1')
      .then(res => res.json())
      .then(res => {
        countEl.innerHTML = res.value;
      })
    }
    
  updateVisitCount();
