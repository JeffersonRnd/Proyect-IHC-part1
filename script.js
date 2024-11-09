const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
const nextButton = document.getElementById('nextButton');
const createAccount = document.getElementById('createAccount');
const existingUserLink = document.getElementById('existingUserLink');
const clientButton = document.getElementById('clientButton');
const loginForm = document.getElementById('loginForm');
const selectRole = document.getElementById('selectRole');
const welcomeScreen = document.getElementById('welcomeScreen');
const mainScreen = document.getElementById('mainScreen');

// Mostrar pantalla de bienvenida por 3 segundos
setTimeout(() => {
    welcomeScreen.classList.add('hidden');
    selectRole.classList.remove('hidden');
}, 3000);

// Al hacer clic en "YA TENGO UN USUARIO", llevar directamente a los campos de usuario y contraseña
existingUserLink.addEventListener('click', (e) => {
    e.preventDefault();
    nextButton.classList.add('hidden');
    createAccount.classList.remove('hidden');
});

// Al hacer clic en "Siguiente", mostrar campos de usuario y contraseña
nextButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Verificar si los campos "Nombre", "Apellido" y "Teléfono" están llenos
    if (firstName.value && lastName.value && phone.value) {
        nextButton.classList.add("hidden");
        createAccount.classList.remove("hidden"); // Muestra la sección de crear cuenta
    } else {
        // Mostrar un mensaje de alerta si falta algún campo
        alert("Por favor, complete todos los campos requeridos.");
    }
});

// Validar usuario y contraseña y simular acceso a pantalla principal
document.getElementById('submitLogin').addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if (username.value === '' || password.value === '') {
        alert('Por favor, ingrese un nombre de usuario y contraseña válidos');
    } else {
        alert('Datos registrados correctamente');
        
        // Espera 2 segundos antes de redirigir a tu página
        setTimeout(() => {
            window.location.href = "https://jeffersonrnd.github.io/Proyect-IHC-part2/";
        }, 2000);
    }
});


// Al hacer clic en el botón de cliente, mostrar el formulario de registro
clientButton.addEventListener('click', () => {
    selectRole.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Evento para cuando se hace clic en el botón de Ingresar
const submitLogin = document.getElementById('submitLogin');
submitLogin.addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    // Verificar si los campos de usuario y contraseña no están vacíos
    if (username.value && password.value) {
        // Mostrar un mensaje de éxito al registrar los datos
        alert('Datos registrados correctamente');
        
        // Espera 2 segundos antes de redirigir a tu página
        setTimeout(() => {
            window.location.href = "https://jeffersonrnd.github.io/Proyect-IHC-part2/";
        }, 2000);

    } else {
        // Si los campos están vacíos, mostrar una alerta
        alert('Por favor, ingrese un nombre de usuario y contraseña válidos');
    }
});
