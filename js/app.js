const container = document.querySelector(".container");
const cosas = [
  {
    "name": "Server & Emojis Link",
    "image": "images/1.png",
    "des": "mi servidor principal ",
    "invitacion": "https://discord.gg/QZy4r2JjJC",
  },
  {
    "name": "StreamersCommunity ",
    "image": "images/1-1.png",
    "des": "mi comunidad de streamers ",
    "invitacion": "https://discord.gg/QZy4r2JjJC",
  },
  {
    "name": "GubazaBot",
    "image": "images/1-3.png",
    "des": "el servidor de mi bot ",
    "invitacion": "https://discord.gg/XAqNRaW",
    "invite": "https://discord.gg/XAqNRaW"
  },
  {
    "name": "Spring",
    "image": "images/Spring.gif",
    "des": "El servidor de mi amigo ",
    "invitacion": "https://discord.gg/e3k73Gafzh",
  },
];
const cositas = () => {
  let output = "";
  cosas.forEach(
    ({ name, image ,invitacion,des,invite }) =>
      (output +=`
      <div class="card">
        <img class="card--avatar" src=${image} />
        <h1 class="card--title">${name}</h1> 
        <h1 class="card--descrision">${des}</h1>
        <a class="card--link" href="${invitacion}">Unirse</a>
      </div>
      `)
  );
  container.innerHTML = output;
  
};

document.addEventListener("DOMContentLoaded", cositas);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  
      
  });
}
