async function openInstagramApp() {
    // Check if Instagram app is installed
    var userAgent = navigator.userAgent || window.opera;
    
    if (/android/i.test(userAgent)) {
        // Android device
        var timeout = 2000; // Timeout in milliseconds
        var startTime = Date.now();

        // Attempt to open Instagram app
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = 'instagram://app';
        document.body.appendChild(iframe);

        setTimeout(function() {
            var endTime = Date.now();
            // If Instagram app does not open within the timeout, redirect to Google Play Store
            if (endTime - startTime < timeout) {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.instagram.android';
            }
        }, timeout);
    }
}

const openAppButton = document.getElementById('openAppButton');
openAppButton.addEventListener('click', openInstagramApp);
