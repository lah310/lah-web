const cards = document.getElementById("Servidores");
const otro = document.getElementById("otro")
const bot = document.getElementById("bots");
const hamburguer = document.querySelector(".icon");
const navMenu = document.querySelector(".navi-ul");

hamburguer.addEventListener("click", responsive);

function responsive(){
    navMenu.classList.toggle("active");
}
fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCA7PK8GgqEsLubyQbQ1OmSA&key=AIzaSyBb-UeoPgXUZj5IS5xbDo_hdz18p_NNNnY')
.then((response) => {
  return response.json();
})
.then((data) => {
  const subs = data["items"][0].statistics.subscriberCount

const otros = [
  {
  name:"YoSoyLah",
  des: `${subs} Subs`,
  image:"images/lah.png",
  subs: "sdadc",
  link:"https://www.youtube.com/channel/UCA7PK8GgqEsLubyQbQ1OmSA?sub_confirmation=1"
  }
]; 
otros.forEach(({ name, image, des, link}) => {
  otro.innerHTML += `
      <div class="yt">
          <img class="yt__img" src="${image}" alt="" />
          <div class="yt__content">
            <p class="yttitle">${name}</p>
            <p class="ytdescription">${des}</p>
          
          </div>
          <a class="ytbtn" href="${link}" target="_blank">SUSCRIBIRSE</a>
      </div>
      `;
});

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
