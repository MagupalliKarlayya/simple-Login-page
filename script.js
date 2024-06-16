document.addEventListener('DOMContentLoaded', function() {
    const usernameElement = document.querySelector('.textname');
    if (usernameElement.textContent.trim().length > 0) {
        var presenttext = usernameElement.textContent.trim()
        console.log(presenttext);
     }
    const loginTag = document.querySelector('.login-tag');
    const logoutTag = document.querySelector('.logout-tag');
    const username = sessionStorage.getItem('username');

    if (username) {
        usernameElement.textContent = `${username}`;
        loginTag.style.display = 'none';
        logoutTag.style.display = 'block';
    } else {
        // usernameElement.textContent = "none"; 
        loginTag.style.display = 'block'; 
        logoutTag.style.display = 'none'; 
    }

    logoutTag.addEventListener('click', function(event) {
        event.preventDefault();
        sessionStorage.removeItem('username');
         usernameElement.textContent = presenttext;
        loginTag.style.display = 'block';
        logoutTag.style.display = 'none';
    });
});
