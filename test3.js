document.addEventListener("DOMContentLoaded", function() {
    function showNotification() {
        var path = window.location.pathname;
        var isWatchPage = path.startsWith('/watch/');

        if (isWatchPage) {
            if (!document.getElementById('notificationOverlay')) {
                // Create the content overlay (leaving header and footer visible)
                var overlay = document.createElement('div');
                overlay.id = 'notificationOverlay';
                overlay.style.position = 'fixed';
                overlay.style.top = document.querySelector('header').offsetHeight + 'px'; // Start after the header
                overlay.style.bottom = document.querySelector('footer').offsetHeight + 'px'; // End above the footer
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                overlay.style.color = 'white';
                overlay.style.display = 'flex';
                overlay.style.flexDirection = 'column';
                overlay.style.justifyContent = 'center';
                overlay.style.alignItems = 'center';
                overlay.style.zIndex = '9999';
                overlay.style.textAlign = 'center';

                // Create message
                var message = document.createElement('p');
                message.textContent = "Please complete the task to continue watching.";

                // Create button
                var button = document.createElement('button');
                button.id = 'skipButton';
                button.textContent = 'Skip Ads';
                button.style.padding = '15px 30px';
                button.style.fontSize = '18px';
                button.style.backgroundColor = '#ef4323';
                button.style.color = 'white';
                button.style.border = 'none';
                button.style.cursor = 'pointer';
                button.style.marginTop = '20px';

                // Append elements to overlay
                overlay.appendChild(message);
                overlay.appendChild(button);
                document.body.appendChild(overlay);

                // Handle button click
                button.addEventListener('click', function() {
                    window.location.href = "https://raretoon.in/skip.php?return_url=" + encodeURIComponent(window.location.href);
                });
            }
        } else {
            var existingOverlay = document.getElementById('notificationOverlay');
            if (existingOverlay) {
                existingOverlay.remove();
            }
        }
    }

    showNotification();

    window.addEventListener('popstate', function() {
        showNotification();
    });

    document.body.addEventListener('click', function(e) {
        var target = e.target;
        if (target && target.tagName === 'A' && target.href) {
            setTimeout(function() {
                showNotification();
            }, 100);
        }
    });
});
