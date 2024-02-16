function openInstagramApp() {
    // if(navigator.userAgent.toLowerCase().indexOf("android") > -1){
        window.location.href = 'http://play.google.com/store/apps/details?id=com.truecaller&hl=en';
    // }
    // if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1){
    //     window.location.href = 'http://itunes.apple.com/lb/app/truecaller-caller-id-number/id448142450?mt=8';
    // }
}

const openAppButton = document.getElementById('openAppButton');
openAppButton.addEventListener('click', openInstagramApp);
