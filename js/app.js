const container = document.querySelector(".container");
const cosas = [
 
  {
    "name": "GubazaBot",
    "image": "images/1-3.png",
    "des": "el servidor de mi bot ",
    "invitacion": "https://discord.gg/XAqNRaW",
    "invite": "https://discord.gg/XAqNRaW"
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
