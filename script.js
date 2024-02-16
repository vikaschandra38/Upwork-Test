function openInstagramApp() {
// Open Instagram
const url = "intent://user?username=exampleuser;instagram.com/#Intent;scheme=https;package=com.instagram.android;end";

window.location.replace(url); 
}

const openAppButton = document.getElementById('openAppButton');
openAppButton.addEventListener('click', openInstagramApp);
