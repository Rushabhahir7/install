document.addEventListener("DOMContentLoaded", function() {
    // Create the full-page overlay notification
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
    overlay.style.textAlign = 'center';

    // Create the notification content
    var message = document.createElement('div');
    message.innerHTML = `
        <p style="font-size: 24px; margin-bottom: 20px;">Test Notification: Please complete the task!</p>
        <button id="skipButton" style="padding: 15px 30px; font-size: 18px; background-color: #ef4323; color: white; border: none; cursor: pointer;">Skip Ads</button>
    `;

    overlay.appendChild(message);
    document.body.appendChild(overlay);

    // Handle the button click event to simulate redirecting the user
    document.getElementById('skipButton').addEventListener('click', function() {
        alert('Redirecting to skip page...');
        // Simulate redirection (you can replace this with a real URL)
        window.location.href = "https://your-redirect-url.com";
    });
});
