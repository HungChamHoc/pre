
function log() {
    n1 = document.getElementById('user').value;
    n2 = document.getElementById('pas').value;
    if ((n1 != 'admin') && (n2 != 123456)) {
        alert('Login failed! '+'Incorrect username or password!');
    } else {
        alert('Login success! '+'Redirecting to the next page...');
    }
}


