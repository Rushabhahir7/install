document.addEventListener("DOMContentLoaded", function() {
    // Check if the current URL matches the watch page pattern
    var path = window.location.pathname; // Get the current path
    var isWatchPage = path.startsWith('/watch/'); // Check if it starts with "/watch/"

    if (isWatchPage) {
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

        // Append elements to overlay
        overlay.appendChild(message);
        overlay.appendChild(button);
        document.body.appendChild(overlay);

        // Handle button click
        button.addEventListener('click', function() {
            alert('Redirecting to skip page...');
            window.location.href = "https://raretoon.in/skip.php?return_url=" + encodeURIComponent(window.location.href);
        });
    }
});
