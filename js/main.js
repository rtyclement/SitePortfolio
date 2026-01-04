// Données des projets
const projectsData = [
    {
        title: "Jeu de Labyrinthe",
        description: "Pour ce projet, toujours mené par équipe, où nous étions 5, nous devions créer un jeu de labyrinthe en java avec javafx pour l'interface graphique en suivant les contraintes suivantes : Utilisation obligatoire du pattern Oberservable-Observer via son implémentation en MVC(modele-vue-controleur) en mode pull. La génération des labyrinthes est aléatoire, avec 2 algorithmes, l'un purement aléatoire à taux de mur, et l'autre qui est parfait, basé sur un parcours en DSF, avec une distance minimale entre entré et sortie.",
        skills: ["Java", "JavaFX", "Pattern MVC", "SOLID", "Clean Code"],
        link: "https://github.com/rtyclement/SAE_Labyrinthe",
        images: ["./img/laby/img1.png","./img/laby/img2.png","./img/laby/img3.png","./img/laby/img4.png","./img/laby/img5.png","./img/laby/img6.png","./img/laby/img7.png","./img/laby/img8.png","./img/laby/img9.png","./img/laby/img10.png"]
    },
    {
        title: "Sirtet",
        description: "Découverte de l'environnement agile par groupe de 5. Nous devions inventer, créer et faire démonstration de notre projet. Nous avons donc en groupe développer une application en Java, qui avait comme contrainte d'avoir un affichage dans un terminal. Pour notre part, nous avons fait le choix de créer un jeu, nommé Sirtet, qui n'est qu'une réplique de Tetris.",
        skills: ["Java", "POO", "Lanterna", "Git", "Méthodologie Agile", "Sprint", "Backlog"],
        link: "https://github.com/rtyclement/SAE_Sirtet_Agile",
        images: ["/img/sirtet/img0.png","/img/sirtet/img1.png","/img/sirtet/img2.png","/img/sirtet/img3.png"]
    },
    {
        title: "Application de Matching",
        description: "Le but de ce projet était de réaliser par groupe de 3, une application avec interface graphique qui devait répondre au besoin suivant : Permettre la gestion d'appariements entre étudiants dans le cadre d'un échange linguistique entre 4 pays différents. Notre application devait alors permettre l'importation d'un fichier CSV contenant une représentation d'une liste d'étudiants avec leurs contraintes et préférences, puis grâce à l'utilisation d'un graphe biparti, notre application effectuait un matching pour associer les étudiants entre eux.",
        skills: ["Java", "JavaFX", "POO", "JGraphT"],
        link: "https://github.com/rtyclement/SAE_Matching",
        images: ["/img/matching/img1.png","/img/matching/img2.png","/img/matching/img3.png","/img/matching/img4.png","/img/matching/img5.png","/img/matching/img6.png"]
    },
    {
        title: "Plateforme Web de covoiturage",
        description: "Ce projet réalisé par groupe de 3, avait pour but de parvenir à la création d'un site internet proposant une solution de covoiturage. Nous devions nous inspirer du plan de mobilité de l'entreprise Pocheco pour développer une stratégie de mobilité éco-responsable. Le projet s'est segmenté en 3 grandes parties : élaboration d'une analyse stratégique de l'entreprise, réalisation du site web et création d'une newsletter promotionnelle.",
        skills:["HTML", "CSS", "UX/UI", "Travail en équipe"],
        link: "https://github.com/rtyclement/Site_Covoiturage",
        images: ["/img/site/img1.png","/img/site/img2.png","/img/site/img3.png","/img/site/img4.png"]
    },
    {
        title: "BattleQuizDeluxe",
        description: "L'objectif de ce projet était de créer à partir de zéro un jeu ludo-pédagogique dans le langage IJava. Le jeu, BattleQuiz Deluxe, repose sur un système de combat au tour par tour où chaque action est validée par une question à choix multiple. Le projet incluait la conception du gameplay, la gestion des questions, l'implémentation complète du jeu ainsi qu'une soutenance orale et une démonstration auprès d'élèves de 6e.",
        skills: ["Algorithmique", "IJava", "Programmation séquentielle"],
        link: "https://github.com/rtyclement/Battle_Quiz_Deluxe",
        images: ["/img/battlequiz/img0.png","/img/battlequiz/img1.png","/img/battlequiz/img2.png"]
    }
];

// Variables globales
let currentProjectIndex = 0;
let currentImageIndex = 0;

// Éléments DOM
const modal = document.getElementById("projectModal");
const modalImages = document.getElementById("modalImages");
const modalDescription = document.getElementById("modalDescription");
const modalSkills = document.getElementById("modalSkills");
const modalFooter = document.getElementById("modalFooter");
const fullscreenOverlay = document.getElementById("fullscreenOverlay");
const fullscreenImage = document.getElementById("fullscreenImage");

// ===== GESTION DES MODALES DE PROJETS =====

// Initialisation des boutons "En savoir plus"
document.querySelectorAll(".more-button").forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openModal(index);
    });
});

// Ouverture de la modale d'un projet
function openModal(index) {
    const project = projectsData[index];
    currentProjectIndex = index;
    currentImageIndex = 0;

    // Génération du slider d'images
    modalImages.innerHTML = `
        <div class="modal-image-slider">
            <img src="${project.images[0]}" alt="${project.title}" class="modal-main-image">
            <div class="fullscreen-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                </svg>
            </div>
            ${project.images.length > 1 ? `
                <div class="image-dots">
                    ${project.images.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('')}
                </div>
            ` : ''}
        </div>
    `;

    // Description du projet
    modalDescription.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;

    // Compétences mobilisées
    modalSkills.innerHTML = `
        <h3>Compétences mobilisées</h3>
        <ul>
            ${project.skills.map(skill => `<li>${skill}</li>`).join("")}
        </ul>
    `;

    // Lien vers le projet
    modalFooter.innerHTML = `
        <a href="${project.link}" target="_blank" class="git-link">
            Voir le projet
        </a>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Réattacher les événements après génération du HTML
    attachModalEvents();
}

// Fermeture de la modale
function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

// Clic en dehors de la modale pour fermer
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

// ===== GESTION DU SLIDER D'IMAGES =====

// Attachement des événements après génération du HTML de la modale
function attachModalEvents() {
    // Événement pour le bouton plein écran
    const fullscreenIcon = document.querySelector('.fullscreen-icon');
    if (fullscreenIcon) {
        fullscreenIcon.addEventListener('click', openFullscreen);
    }

    // Événements pour les points de navigation
    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            changeImage(index);
        });
    });
}

// Changement d'image via les points
function changeImage(index) {
    const project = projectsData[currentProjectIndex];
    currentImageIndex = index;

    const mainImage = document.querySelector('.modal-main-image');
    if (mainImage) {
        mainImage.src = project.images[index];
    }

    // Mise à jour des points actifs
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// ===== GESTION DU MODE PLEIN ÉCRAN =====

// Ouverture en plein écran
function openFullscreen() {
    const project = projectsData[currentProjectIndex];
    const fullscreenOverlay = document.getElementById('fullscreenOverlay');
    
    if (fullscreenOverlay) {
        // Générer le contenu plein écran avec les points de navigation
        fullscreenOverlay.innerHTML = `
            <div class="fullscreen-content">
                <button class="fullscreen-close" onclick="closeFullscreen()">×</button>
                <img src="${project.images[currentImageIndex]}" alt="${project.title}" class="fullscreen-image" id="fullscreenImage">
                ${project.images.length > 1 ? `
                    <div class="fullscreen-dots">
                        ${project.images.map((_, i) => `<span class="dot ${i === currentImageIndex ? 'active' : ''}" data-index="${i}"></span>`).join('')}
                    </div>
                ` : ''}
            </div>
        `;
        
        fullscreenOverlay.classList.add('active');
        
        // Attacher les événements aux points en plein écran
        attachFullscreenDotEvents();
    }
}

// Attachement des événements aux points en plein écran
function attachFullscreenDotEvents() {
    document.querySelectorAll('.fullscreen-dots .dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(dot.dataset.index);
            changeFullscreenImage(index);
        });
    });
}

// Changement d'image en plein écran
function changeFullscreenImage(index) {
    const project = projectsData[currentProjectIndex];
    currentImageIndex = index;
    
    const fullscreenImage = document.getElementById('fullscreenImage');
    if (fullscreenImage) {
        fullscreenImage.src = project.images[index];
    }
    
    // Mise à jour des points actifs en plein écran
    document.querySelectorAll('.fullscreen-dots .dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    // Mise à jour aussi des points dans la modale
    document.querySelectorAll('.image-dots .dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    // Mise à jour de l'image dans la modale
    const modalImage = document.querySelector('.modal-main-image');
    if (modalImage) {
        modalImage.src = project.images[index];
    }
}

// Fermeture du plein écran
function closeFullscreen() {
    const fullscreenOverlay = document.getElementById('fullscreenOverlay');
    if (fullscreenOverlay) {
        fullscreenOverlay.classList.remove('active');
    }
}

// Clic en dehors de l'image pour fermer le plein écran
if (fullscreenOverlay) {
    fullscreenOverlay.addEventListener('click', (e) => {
        if (e.target.classList.contains('fullscreen-overlay') || e.target.classList.contains('fullscreen-content')) {
            closeFullscreen();
        }
    });
}

// ===== SMOOTH SCROLL NAVIGATION =====

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));
        const navHeight = document.querySelector("nav").offsetHeight;

        const start = window.scrollY;
        const end = target.getBoundingClientRect().top + window.scrollY - navHeight;

        const distance = end - start;
        const duration = 500;
        let startTime = null;

        function scrollStep(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percent = Math.min(progress / duration, 1);

            window.scrollTo(0, start + distance * percent);

            if (progress < duration) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    });

});
