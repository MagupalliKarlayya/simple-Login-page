document.querySelector('.submitform').addEventListener('submit',(event) =>{
    event.preventDefault();
    window.location.href="index.html";
    const username = document.querySelector('.username input').value;
    sessionStorage.setItem('username',username);
})