function openInstagramApp() {
// Open Instagram
const url = "intent://instagram.com/SplashScreen#Intent;scheme=https;package=com.instagram.android;end";
window.location.href = (url); 
}

function openInstagramLink(){
  // Create a new anchor element
var link = document.createElement('a');

// Set attributes for the anchor element
link.href = 'instagram://user?username=exampleuser';
link.innerText = '';
link.target = '_blank'; // Opens the link in a new tab
link.id = "instagramLink"

// Append the anchor element to an existing DOM element
document.body.appendChild(link);
// Remove the anchor element after a certain time (e.g., 5 seconds)
setTimeout(function() {
  var elementToRemove = document.getElementById('instagramLink');
  if (elementToRemove) {
      elementToRemove.parentNode.removeChild(elementToRemove);
  }
}, 5000); 
}

const openAppButton = document.getElementById('openAppButton');
openAppButton.addEventListener('click', openInstagramApp);
