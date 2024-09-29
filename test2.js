document.addEventListener("DOMContentLoaded", function() {
    // Function to show the notification only on the watch pages
    function showNotification() {
        // Get the current path and check if it matches the watch page pattern
        var path = window.location.pathname;
        var isWatchPage = path.startsWith('/watch/');

        // If on a watch page, show the notification
        if (isWatchPage) {
            if (!document.getElementById('notificationOverlay')) {
                // Create overlay
                var overlay = document.createElement('div');
                overlay.id = 'notificationOverlay';
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
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
            // If not on a watch page, remove the notification if it exists
            var existingOverlay = document.getElementById('notificationOverlay');
            if (existingOverlay) {
                existingOverlay.remove();
            }
        }
    }

    // Call showNotification when the page first loads
    showNotification();

    // Listen for any navigation changes (for cases where users navigate without refreshing)
    window.addEventListener('popstate', function() {
        showNotification(); // Re-check the URL when back/forward navigation occurs
    });

    // Optionally, if you use JavaScript-based navigation (e.g., clicking a "Watch" button without reloading):
    document.body.addEventListener('click', function(e) {
        var target = e.target;
        if (target && target.tagName === 'A' && target.href) {
            // Slight delay to handle navigation timing
            setTimeout(function() {
                showNotification(); // Re-check the URL after clicking a link
            }, 100);
        }
    });
});
