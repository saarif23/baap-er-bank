// step 1: add click event handler with the submit  button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step 2 : get the email address inside  the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3 : get the password inside  the password input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password)

    // DANGER:  Do not verify email password on  the client side
    // step 4: verify email and password
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    } else {
        alert('Toke ami teijjo sontan gosona korlam toi password vole gacos')
    }
})