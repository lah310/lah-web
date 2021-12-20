const cards = document.getElementById("Servidores");
const otro = document.getElementById("otro")
const bot = document.getElementById("bots");
const hamburguer = document.querySelector(".icon");
const navMenu = document.querySelector(".navi-ul");

hamburguer.addEventListener("click", responsive);

function responsive(){
    navMenu.classList.toggle("active");
}
const xex = [
  {
    name: "",
    image: "images/lah.png",
    des: "🐂 • Secta  LAH",
    invitacion: "https://discord.gg/gbdqCuRRKU",
  },
];


const sv = [
  {
    name: "",
    image: "images/lah.png",
    des: "🐂 • Secta  LAH",
    invitacion: "https://discord.gg/gbdqCuRRKU",
  },
];
const bots = [
  {
    name: "tiger",
    des: "Bot de moderacion, diversion",
    image:
      "https://images.discordapp.net/avatars/681846391416422440/7b4143f681ea4418585c6f50b5a6c234.png?size=512",
    invitacion:
      "https://discord.com/oauth2/authorize?client_id=681846391416422440&scope=bot&permissions=2146958847",
  },
  {
    name: "Rodolfo.",
    des: "Bot multifuncional",
    image:
      "https://cdn.discordapp.com/avatars/766442549253636097/1fc3ff55058f05a965a5287fc0505e1c.png",
    invitacion:
      "https://discord.com/oauth2/authorize?client_id=766442549253636097&scope=bot&permissions=1945627743",
  },
];








bots.forEach(({ name, image, des, invitacion }) => {
  bot.innerHTML += `
      <div class="card">
      <img class="card__img" src="${image}">
          <div class="card__content">
            <p class="cardtitle">${name}</p>
            <p class="carddescription">${des}</p>
          </div>
          <a class="cardbtn" href="${invitacion}" target="_blank">Invitar</a>
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
