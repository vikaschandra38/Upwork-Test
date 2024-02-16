function openInstagramApp() {
// Open Instagram
const url = "intent://instagram.com/#Intent;user?username=vikaschandra38;scheme=https;package=com.instagram.android;end";

window.location.replace(url); 
}

const openAppButton = document.getElementById('openAppButton');
openAppButton.addEventListener('click', openInstagramApp);
