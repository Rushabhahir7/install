(function() {
        const notification = document.getElementById('errorNetwork');

        const updateOnlineStatus = () => {
            notification.classList.toggle('show', !navigator.onLine);
        };

        document.getElementById('closeButton').addEventListener('click', () => {
            notification.classList.remove('show');
        });

        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        // Initial check
        updateOnlineStatus();
    })();

function showDevToolsNotification() {
        const notification = document.getElementById('devtools-notification');
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    function detectDevTools() {
        document.addEventListener('keydown', (e) => {
            if (
                (e.key === 'F12') ||
                (e.ctrlKey && e.shiftKey && e.key === 'I')
            ) {
                e.preventDefault();
                showDevToolsNotification();
            }
        });
    }

    detectDevTools();
