const cards = document.getElementById("Servidores");
const otro = document.getElementById("otro")
const bot = document.getElementById("bots");
const hamburguer = document.querySelector(".icon");
const navMenu = document.querySelector(".navi-ul");

hamburguer.addEventListener("click", responsive);

function responsive(){
    navMenu.classList.toggle("active");
}


const sv = [
  {
    name: "🐂 • Secta  LAH",
    image: "images/lah.png",
    des: "Mi servidor principal de discord",
    invitacion: "https://discord.gg/gbdqCuRRKU",
  },
  {
    name: "Bienargentino",
    image: "https://i.imgur.com/mCTIOum.png",
    des: "Un servidor de unturned",
    invitacion: "https://discord.gg/6gtkZ6bGvY",
  },
  {
    name: "Los Streamers community",
    image: "images/1-1.png",
    des: "Es un servidor de streamers",
    invitacion: "https://discord.gg/pS8nj7C8JE",
  },
];





sv.forEach(({ name, image, des, invitacion }) => {
  cards.innerHTML += `
    <div class="card">
    <a href="${invitacion}" target="_blank"><img class="card__img" src="${image}"></a>
        <div class="card__content">
          <p class="cardtitle">${name}</p>
          <p class="carddescription">${des}</p>
          </div>
        <a class="cardbtn" href="${invitacion}"target="_blank">Unirse</a>
    </div>
    `;
});





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
    }
  }
  
};
