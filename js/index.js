const cards = document.getElementById("Servidores");
const bot = document.getElementById("bots");
const sv = [
  {
    name: "Server & Emojis Link",
    image: "images/1.png",
    des: "mi servidor principal ",
    invitacion: "https://discord.gg/QZy4r2JjJC",
  },
  {
    name: "StreamersCommunity ",
    image: "images/1-1.png",
    des: "mi comunidad de streamers ",
    invitacion: "https://discord.gg/QZy4r2JjJC",
  },
  {
    name: "GubazaBot",
    image: "images/1-3.png",
    des: "el servidor de mi bot ",
    invitacion: "https://discord.gg/XAqNRaW",
    invite: "https://discord.gg/XAqNRaW",
  },
  {
    name: "Spring",
    image: "images/Spring.gif",
    des: "El servidor de mi amigo ",
    invitacion: "https://discord.gg/e3k73Gafzh",
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
    name: "gubaza",
    des: "Bot multifuncional",
    image:
      "https://cdn.discordapp.com/icons/694624825422905463/90457bc69fa5f4fd8e9487c1cee4aca8.png?size=512",
    invitacion:
      "https://discord.com/oauth2/authorize?client_id=640982043555004473&scope=bot&permissions=4402287",
  },
];
sv.forEach(({ name, image, des, invitacion }) => {
  cards.innerHTML += `
    <div class="card">
        <img class="card__img" src="${image}" alt="" />
        <div class="card__content">
          <p class="cardtitle">${name}</p>
          <p class="carddescription">${des}</p>
        </div>
        <a class="cardbtn" href="${invitacion}">Unirse</a>
    </div>
    `;
});
bots.forEach(({ name, image, des, invitacion }) => {
  bot.innerHTML += `
      <div class="card">
          <img class="card__img" src="${image}" alt="" />
          <div class="card__content">
            <p class="cardtitle">${name}</p>
            <p class="carddescription">${des}</p>
          </div>
          <a class="cardbtn" href="${invitacion}">Invitar</a>
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
