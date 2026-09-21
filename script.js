const intro = document.getElementById("intro");
const enterButton = document.getElementById("enterButton");
const backgroundMusic = document.getElementById("backgroundMusic");
const starsContainer = document.getElementById("stars");
const flowersContainer = document.getElementById("flowers-container");
const particles = document.getElementById("particles");
const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");
const closeMessage = document.getElementById("closeMessage");

/* =========================================================
   ENTRAR + MÚSICA
   ========================================================= */

if (enterButton) {
    enterButton.addEventListener("click", async () => {

        intro.classList.add("hide");

        try {
            backgroundMusic.volume = 0.4;
            await backgroundMusic.play();

            console.log("🎵 Música iniciada correctamente");

        } catch (error) {
            console.error("❌ Error al reproducir la música:", error);
        }

    });
}

/* =========================================================
   ESTRELLAS
   ========================================================= */

function createStars() {

    const totalStars = 550;

    for (
        let i = 0;
        i < totalStars;
        i++
    ) {

        const star =
            document.createElement("span");

        star.className = "star";


        const size =
            0.5 +
            Math.random() * 2.3;


        star.style.left =
            Math.random() * 100 + "%";


        star.style.top =
            Math.random() * 100 + "%";


        star.style.width =
            size + "px";


        star.style.height =
            size + "px";


        star.style.setProperty(
            "--duration",
            1.5 +
            Math.random() * 5 +
            "s"
        );


        star.style.animationDelay =
            Math.random() * 5 +
            "s";


        starsContainer.appendChild(star);

    }

}

createStars();


/* =========================================================
   PARTÍCULAS
   ========================================================= */

function createParticles() {

    const totalParticles = 120;

    for (
        let i = 0;
        i < totalParticles;
        i++
    ) {

        const particle =
            document.createElement("span");

        particle.className =
            "particle";


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.top =
            Math.random() * 100 + "%";


        particle.style.setProperty(
            "--speed",
            2 +
            Math.random() * 6 +
            "s"
        );


        particle.style.animationDelay =
            Math.random() * 5 +
            "s";


        particles.appendChild(particle);

    }

}

createParticles();


/* =========================================================
   MENSAJES
   ========================================================= */

const flowerMessages = [

    "Que nunca te falten motivos para sonreír. 🌻",

    "Eres una personita muy especial. 💛",

    "Ojalá cada día encuentres algo que haga feliz a tu corazón. ✨",

    "Gracias por existir y hacer este mundo un poquito más bonito. 🌻",

    "Que todos tus sueños encuentren un camino para hacerse realidad. 🌙✨",

    "Incluso en los días oscuros siempre puede aparecer una pequeña luz. 💫",

    "Nunca olvides lo mucho que vales. 🌼",

    "Que la vida te regale momentos muy bonitos. ✨",

    "Siempre habrá una razón para volver a florecer. 🌻",

    "Espero que encuentres felicidad en los pequeños detalles. 💛",

    "Que nunca se apague esa luz tan bonita que llevas dentro. 🌟",

    "Mereces días llenos de cosas bonitas. 🌼",

    "Que tus sueños sean más grandes que tus miedos. 🌙",

    "Nunca dejes de perseguir aquello que hace feliz a tu corazón. 💫",

    "Hay personas que hacen más bonito el mundo simplemente estando en él. 🌻",

    "Que cada nuevo día tenga algo especial esperándote. ☀️",

    "Tu existencia hace que este pequeño universo sea más bonito. 🌌",

    "Siempre puedes volver a empezar y volver a florecer. 🌻",

    "Que encuentres pequeñas razones para sonreír cada día. 💛",

    "A veces las cosas más bonitas aparecen cuando menos las esperamos. ✨",

    "Que este universo siempre tenga un lugar para tus sueños. 🌌",

    "Nunca pierdas esa manera tan especial de ver el mundo. 🌻",

    "Que cada estrella te recuerde que incluso en la oscuridad existe luz. ⭐",

    "Hay momentos pequeños que terminan convirtiéndose en recuerdos enormes. 💫",

    "Que nunca te falten personas que quieran verte feliz. 💛",

    "Sigue floreciendo a tu propio ritmo. 🌻",

    "Que la vida te sorprenda con cosas bonitas. ✨",

    "Este pequeño universo guarda una flor especialmente para ti. 🌼",

    "No necesitas tener todo resuelto para seguir avanzando. 🌙",

    "Que cada día encuentres algo que te haga decir: valió la pena. 🌻"

];


/* =========================================================
   CREAR FLOR
   ========================================================= */

function createFlower(index) {


    /*
       NIVEL 1
       Plano de órbita
    */

    const plane =
        document.createElement("div");

    plane.className =
        "flower-orbit-plane";


    /*
       NIVEL 2
       Rotador
    */

    const rotator =
        document.createElement("div");

    rotator.className =
        "flower-orbit-rotator";


    /*
       NIVEL 3
       Flor
    */

    const flower =
        document.createElement("div");

    flower.className =
        "generated-flower";


    /* =====================================================
       DISTANCIA DEL CENTRO
       =====================================================

       IMPORTANTE:

       El planeta mide aproximadamente 135px.

       Las flores empiezan como mínimo
       a unos 300px del centro.

       Por eso no deberían aparecer
       dentro del planeta.
    */

    const radius =
        300 +
        Math.random() * 750;


    /* =====================================================
       ALTURA
       ===================================================== */

    const vertical =
        -260 +
        Math.random() * 520;


    /* =====================================================
       PROFUNDIDAD
       ===================================================== */

    const depth =
        -300 +
        Math.random() * 600;


    /* =====================================================
       INCLINACIÓN DE LA ÓRBITA
       ===================================================== */

    const tiltX =
        -65 +
        Math.random() * 130;


    const tiltY =
        -40 +
        Math.random() * 80;


    const tiltZ =
        Math.random() * 360;


    /* =====================================================
       TAMAÑO
       ===================================================== */

    const scale =
        0.25 +
        Math.random() * 0.85;


    /* =====================================================
       VELOCIDAD
       ===================================================== */

    const duration =
        18 +
        Math.random() * 40;


    /* =====================================================
       POSICIÓN INICIAL
       ===================================================== */

    const startAngle =
        Math.random() * 360;


    /* =====================================================
       VARIABLES DEL PLANO
       ===================================================== */

    plane.style.transform = `
        rotateZ(${tiltZ}deg)
        rotateX(${tiltX}deg)
        rotateY(${tiltY}deg)
    `;


    /* =====================================================
       VARIABLES DEL ROTADOR
       ===================================================== */

    rotator.style.setProperty(
        "--duration",
        duration + "s"
    );


    rotator.style.setProperty(
        "--start-angle",
        startAngle + "deg"
    );


    rotator.style.animationDelay =
        -Math.random() * duration +
        "s";


    /* =====================================================
       VARIABLES DE LA FLOR
       ===================================================== */

    flower.style.setProperty(
        "--radius",
        radius + "px"
    );


    flower.style.setProperty(
        "--vertical",
        vertical + "px"
    );


    flower.style.setProperty(
        "--depth",
        depth + "px"
    );


    flower.style.setProperty(
        "--scale",
        scale
    );


    /* =====================================================
       MENSAJE
       ===================================================== */

    flower.dataset.message =
        flowerMessages[
            index %
            flowerMessages.length
        ];


    /* =====================================================
       HTML DE LA FLOR
       ===================================================== */

    flower.innerHTML = `

        <div class="generated-head">

            <span
                class="generated-petal p1">
            </span>

            <span
                class="generated-petal p2">
            </span>

            <span
                class="generated-petal p3">
            </span>

            <span
                class="generated-petal p4">
            </span>

            <span
                class="generated-petal p5">
            </span>

            <span
                class="generated-petal p6">
            </span>

            <span
                class="generated-petal p7">
            </span>

            <span
                class="generated-petal p8">
            </span>

            <span
                class="generated-center">
            </span>

        </div>


        <div class="generated-stem"></div>

        <div class="generated-leaf left"></div>

        <div class="generated-leaf right"></div>

    `;


    /* =====================================================
       ARMAR ESTRUCTURA

       PLAN
         ↓
       ROTADOR
         ↓
       FLOR
    ===================================================== */

    rotator.appendChild(flower);

    plane.appendChild(rotator);

    flowersContainer.appendChild(plane);


    /* =====================================================
       CLICK
       ===================================================== */

    flower.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();


            messageText.textContent =
                flower.dataset.message;


            messageBox.classList.add(
                "show"
            );

        }
    );

}


/* =========================================================
   CREAR FLORES
   ========================================================= */

const TOTAL_FLOWERS = 160;


for (
    let i = 0;
    i < TOTAL_FLOWERS;
    i++
) {

    createFlower(i);

}


/* =========================================================
   CERRAR MENSAJE
   ========================================================= */

closeMessage.addEventListener(
    "click",
    () => {

        messageBox.classList.remove(
            "show"
        );

    }
);


/* =========================================================
   ESC
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            messageBox.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================================
   CLICK FUERA DEL MENSAJE
   ========================================================= */

messageBox.addEventListener(
    "click",
    (event) => {

        if (
            event.target === messageBox
        ) {

            messageBox.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================================
   PARALLAX DEL UNIVERSO
   ========================================================= */

let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;


document.addEventListener(
    "mousemove",
    (event) => {

        targetX =
            (
                event.clientX /
                window.innerWidth -
                0.5
            ) * 2;


        targetY =
            (
                event.clientY /
                window.innerHeight -
                0.5
            ) * 2;

    }
);


function updateParallax() {

    mouseX +=
        (
            targetX -
            mouseX
        ) * 0.02;


    mouseY +=
        (
            targetY -
            mouseY
        ) * 0.02;


    const scene =
        document.querySelector(
            ".space-scene"
        );


    if (scene) {

        scene.style.transform = `
            rotateX(${mouseY * -1.5}deg)
            rotateY(${mouseX * 1.5}deg)
        `;

    }


    requestAnimationFrame(
        updateParallax
    );

}


updateParallax();


/* =========================================================
   APARICIÓN DE FLORES
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        const flowers =
            document.querySelectorAll(
                ".generated-flower"
            );


        flowers.forEach(
            (flower, index) => {

                flower.style.opacity = "0";


                setTimeout(
                    () => {

                        flower.style.transition =
                            "opacity 0.8s ease";


                        flower.style.opacity =
                            "1";

                    },

                    Math.random() * 2500

                );

            }
        );

    }
);