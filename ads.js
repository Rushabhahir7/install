document.addEventListener("DOMContentLoaded", function() {
    // Check if the user has a valid access token in localStorage or sessionStorage
    if (!sessionStorage.getItem('access_token') || new Date().getTime() > sessionStorage.getItem('token_expiration')) {
        // Show full-page overlay notification
        var overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0, 0, 0, 0.8)';
        overlay.style.color = '#fff';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '9999';

        var message = document.createElement('div');
        message.innerHTML = `
            <p>Please complete the task to continue watching.</p>
            <button id="skipButton" style="padding: 15px 30px; font-size: 18px; background-color: #ef4323; color: white; border: none; cursor: pointer;">Skip Ads</button>
        `;
        overlay.appendChild(message);
        document.body.appendChild(overlay);

        // Handle the button click event to redirect the user to the task page
        document.getElementById('skipButton').addEventListener('click', function() {
            // Store the current URL so the user can be redirected back after the task is complete
            var returnUrl = encodeURIComponent(window.location.href);
            window.location.href = "https://raretoon.in/skip.php?return_url=" + returnUrl;
        });
    }
});
