async function openInstagramApp() {
  // Detect installed app (replace with server-side detection if necessary)
  const installedApps = await window.navigator.getInstalledApps();
  const isInstagramInstalled = installedApps.some(app => app.id === 'com.instagram.android');

  // Attempt direct app launch (modify link for iOS devices)
  if (isInstagramInstalled) {
    try {
      const installedInstagramApp = await window.navigator.getInstalledApps({ name: 'Instagram' });
      await installedInstagramApp[0].launch();
      return; // App opened successfully
    } catch (err) {
      console.error('Error launching Instagram app:', err);
    }
  }

  // Fallback to Play Store
  window.location.href = 'https://play.google.com/store/apps/details?id=com.instagram.android';
}

const openAppButton = document.getElementById('openAppButton');
openAppButton.addEventListener('click', openInstagramApp);
