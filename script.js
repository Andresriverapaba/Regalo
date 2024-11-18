window.onload = () => {
    const music = document.getElementById("music");
    const giftBox = document.getElementById("gift-box");
    const container = document.querySelector(".container");
    const heartContainer = document.getElementById("heart-container");
    const overlay = document.getElementById("overlay");
    const overlayImage = document.getElementById("overlay-image");
    const musicControl = document.getElementById("music-control");

    // Referencias para la tarjeta de mensaje y el fondo difuminado
    const messageCard = document.getElementById("message-card");
    const closeCardButton = document.getElementById("close-card");
    const blurBackground = document.getElementById("blur-background");

    // Script para cambiar los mensajes dinámicamente
    const messages = [
        "Nuestro primer paseo por el pueblo",
        "Nuestro primer abrazo",
        "La vez que nos mojamos",
        "La vez que nos reímos tanto juntos",
        "Ese día en la playa, no lo olvidaré",
        "Esa noche en la que hablamos por horas",
        "Recuerdo cuando nos besamos por primera vez",
        "¿Quieres que me haga el muerto?.",
        "Hola Hermosa.",
        "Los viajes que hemos hecho juntos.",
        "Los viajes que faltan.",
        "Te Amo.",
        "Hola Culona.",
        "¡FELIZ CUMPLEAÑOS!.",
    ];
    let currentMessageIndex = 0;

    const leftMessage = document.getElementById('left-message');
    const rightMessage = document.getElementById('right-message');

    // Inicializar el primer mensaje
    leftMessage.innerText = messages[currentMessageIndex];
    rightMessage.innerText = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;

    // Cambiar los mensajes dinámicamente cada 10 segundos
    function changeMessage() {
        leftMessage.innerText = messages[currentMessageIndex];
        rightMessage.innerText = messages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    }

    setInterval(changeMessage, 10000); // Cambiar cada 10 segundos

    // Mostrar la imagen al hacer clic en una foto
    document.querySelectorAll('.photo').forEach(photo => {
        photo.addEventListener('click', function () {
            overlayImage.src = this.src;
            overlay.style.display = 'flex';
        });
    });

    // Cerrar imagen maximizada
    overlay.addEventListener("click", function () {
        overlay.style.display = "none";
    });

     // Botón de música
 musicControl.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicControl.textContent = "Pausar Música";
    } else {
        music.pause();
        musicControl.textContent = "Reproducir Música";
    }
});


closeCardButton.addEventListener("click", () => {
    messageCard.style.display = "none";
    blurBackground.style.display = "none";
    musicControl.style.display = "block"; // Mostrar el botón de control de música
});

    // Al hacer clic en la caja de regalo
    giftBox.addEventListener("click", () => {
        music.play();
        giftBox.style.animation = "shake 0.5s";
        setTimeout(() => {
            giftBox.style.display = "none";
            container.style.display = "block";
            messageCard.style.display = "block";  // Mostrar la tarjeta de mensaje
            blurBackground.style.display = "block";  // Mostrar el fondo difuminado

            // Crear corazones flotantes
            for (let i = 0; i < 50; i++) {
                createHeart();
            }
        }, 500);
    });

    // Cerrar la tarjeta de mensaje
    closeCardButton.addEventListener("click", () => {
        messageCard.style.display = "none";
        blurBackground.style.display = "none";  // Ocultar el fondo difuminado
    });

    // Crear corazón animado
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 6 + 4}s`;
        heart.style.transform = `scale(${Math.random() * 1.5 + 0.8})`;
        heartContainer.appendChild(heart);

        // Remover corazones después de terminar la animación
        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }

    // Mostrar los mensajes a los lados de los videos cuando se hace scroll
    const videoGallery = document.getElementById('video-gallery');
    const videoWrapper = videoGallery.querySelector('.gallery');

    videoWrapper.addEventListener('scroll', () => {
        // Los mensajes también se actualizan al hacer scroll por los videos
        leftMessage.innerText = messages[currentMessageIndex];
        rightMessage.innerText = messages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    });
};

