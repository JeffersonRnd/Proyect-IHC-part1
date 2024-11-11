const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
const nextButton = document.getElementById('nextButton');
const createAccount = document.getElementById('createAccount');
const existingUserLink = document.getElementById('existingUserLink');
const clientButton = document.getElementById('clientButton');
const adminButton = document.getElementById('adminButton'); 
const loginForm = document.getElementById('loginForm');
const selectRole = document.getElementById('selectRole');
const welcomeScreen = document.getElementById('welcomeScreen');
const mainScreen = document.getElementById('mainScreen');
const dniLabel = document.getElementById('dniLabel'); 
const rucLabel = document.getElementById('rucLabel'); 


setTimeout(() => {
    welcomeScreen.classList.add('hidden');
    selectRole.classList.remove('hidden');
}, 3000);


existingUserLink.addEventListener('click', (e) => {
    e.preventDefault();
    nextButton.classList.add('hidden');
    createAccount.classList.remove('hidden');
});


nextButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (firstName.value && lastName.value && phone.value) {
        nextButton.classList.add("hidden");
        createAccount.classList.remove("hidden");
    } else {
        alert("Por favor, complete todos los campos requeridos.");
    }
});

document.getElementById('submitLogin').addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if (username.value === '' || password.value === '') {
        alert('Por favor, ingrese un nombre de usuario y contraseña válidos');
    } else {
        console.log({
            firstName: firstName.value,
            lastName: lastName.value,
            dni: dniLabel ? dniLabel.value : '', 
            ruc: rucLabel ? rucLabel.value : '', 
            phone: phone.value,
            username: username.value,
            password: password.value
        });
        alert('Datos registrados correctamente');

        if (clientButton.classList.contains('active')) {
            setTimeout(() => {
                window.location.href = "https://jeffersonrnd.github.io/Proyect-IHC-part2/";
            }, 2000);
        } else if (adminButton.classList.contains('active')) {
            setTimeout(() => {
                window.location.href = "https://www.youtube.com";
            }, 2000);
        }
    }
});

clientButton.addEventListener('click', () => {
    selectRole.classList.add('hidden');
    loginForm.classList.remove('hidden');
    dniLabel.classList.add('hidden');
    rucLabel.classList.add('hidden');
    clientButton.classList.add('active');
    adminButton.classList.remove('active');
});

adminButton.addEventListener('click', () => {
    selectRole.classList.add('hidden');
    loginForm.classList.remove('hidden');
    dniLabel.classList.remove('hidden');
    rucLabel.classList.remove('hidden');
    adminButton.classList.add('active');
    clientButton.classList.remove('active');
});
