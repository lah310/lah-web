console.log("a")


fetch("https://decapi.me/twitch/followers/1lah?count=100")
.then((response) => {
  return response.text();
})
.then((data) => {
  //const subs = data["items"][0].statistics.subscriberCount

console.log(data)




let text = document.getElementById("test").innerHTML; 

let a = text.replace(",", "a");


document.getElementById("test").innerHTML = a;
 

});