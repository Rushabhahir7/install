  let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallNotification();
    });

    function showInstallNotification() {
        const installNotification = document.getElementById('installNotification');
        installNotification.style.display = 'flex';
        installNotification.style.transform = 'translateY(0)';
        installNotification.style.opacity = '1';

        document.getElementById('installBtn').addEventListener('click', async () => {
            installNotification.style.opacity = '0';
            installNotification.style.transform = 'translateY(-100%)';
            setTimeout(() => installNotification.style.display = 'none', 300);
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });

        setTimeout(() => {
            installNotification.style.opacity = '0';
            installNotification.style.transform = 'translateY(-100%)';
            setTimeout(() => installNotification.style.display = 'none', 300);
        }, 10000);
    }
