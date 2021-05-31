const cards = document.getElementById("Servidores");
const otro = document.getElementById("otro")
const bot = document.getElementById("bots");
const sv = [
  {
    name: "Bienargentino",
    image: "https://imgur.com/mCTIOum.png",
    des: "Mi Servidor de unturned ",
    invitacion: "https://discord.gg/xegHQNg9Rt",
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





const otros = [
  {
  name:"YoSoyLah",
  des: ``,
  image:"images/lah.png",
  subs: "sdadc",
  link:"https://www.youtube.com/channel/UCA7PK8GgqEsLubyQbQ1OmSA?sub_confirmation=1"
  }
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
otros.forEach(({ name, image, des, link}) => {
  otro.innerHTML += `
      <div class="yt">
          <img class="yt__img" src="${image}" alt="" />
          <div class="yt__content">
            <p class="yttitle">${name}</p>
            <p class="ytdescription">${des}</p>
          
          </div>
          <a class="ytbtn" href="${link}">SUSCRIBIRSE</a>
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
