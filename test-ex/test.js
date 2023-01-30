var robloxClassA = document.getElementById("desktop-app-banner").getElementsByClassName("banner-container")[0].getElementsByClassName("banner-content-container")[0].getElementsByClassName("font-header-2")[0];
var robloxClassB = document.getElementById("desktop-app-banner").getElementsByClassName("banner-container")[0].getElementsByClassName("banner-content-container")[0].getElementsByClassName("font-footer")[0];

var robloxImgClass = document.getElementById("desktop-app-banner").getElementsByClassName('banner-container')[0];
var mainContentRbx = document.getElementById("wrap").getElementsByClassName("container-main")[0].getElementsByClassName("content")[0];

console.log('Monkey Roblox init!')

robloxClassA.innerHTML = 'Explore the CP in our Desktop app!'
robloxClassB.innerHTML = 'IM BOUT TO *BOINNNNNGGGGG*!!!11'

document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/926296095234093119/1069495328329453609/1675057963174851063.png')";
document.body.style.backgroundColor = "transparent"
mainContentRbx.style.backgroundColor = "#23252770"

console.log(document.body.style.background);