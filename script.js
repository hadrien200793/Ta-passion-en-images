// 2. FONCTION DE CHARGEMENT DYNAMIQUE
// C'est ici qu'on transforme mon tableau passionData en vraies sections sur la page
function chargerContenu() {
    // Je récupère le conteneur principal où je vais "injecter" mes sections
    const mainContainer = document.getElementById('main-content');

    // Petite sécurité : on vide le contenu actuel pour éviter que les sections ne se doublent si jamais on relance la fonction par erreur.
    mainContainer.innerHTML = "";

    // Je boucle sur chaque objet de mon tableau (que j'appelle "item")
    passionData.forEach(item => {
        // 1. On crée l'élément <section>
        const section = document.createElement('section');
        section.id = item.id; // Je lui donne l'ID de la passion pour que le menu de navigation fonctionne


        // Étape 2 : Je remplis la section avec tout le HTML nécessaire.
        // J'utilise les backticks (`) pour pouvoir glisser mes variables ${...} directement dans le texte. JavaScript va remplacer ces codes par les vraies valeurs trouvées dans ton tableau de donnée
        section.innerHTML = `
            <div class="fixed-bg ${item.bgClass}">
                <h1>${item.titre}</h1>
            </div>
            <div class="${item.colorClass}">
                <div class="container">
                    <div class="bloc float-gauche">
                        <div class="zoom-container">
                            <img src="${item.image}" alt="${item.alt}" class="img-zoom" loading="lazy">
                        </div>
                        <p><strong>Mon personnage :</strong> ${item.alt}</p>
                        <p class="copyright">Source : <a href="${item.sourceUrl}" target="_blank" rel="noopener">${item.source}</a></p>
                    </div>
                    <p>${item.texte}</p>
                </div>
            </div>
        `;
        // Étape 3 : Maintenant que la section est prête, je l'ajoute vraiment au HTML de la page
        mainContainer.appendChild(section);

    });

    // Une fois que toutes mes images sont créées, je peux enfin activer le zoom.
    // Si je le faisais avant, le script ne trouverait aucune image
    initZoom();
}

// 3. LA MODALE DE ZOOM
function initZoom() {
    // Je récupère tout ce dont j'ai besoin : les images, la popup et le bouton fermer
    const images = document.querySelectorAll(".img-zoom");
    const popup = document.getElementById("imagePopup");
    const popupImg = document.getElementById("popupImg");
    const closeBtn = document.querySelector(".close");

    // J'ajoute un "écouteur" de clic sur chaque image de ma liste
    images.forEach(img => {
        img.addEventListener("click", () => {
            popup.style.display = "flex";   // J'affiche la popup
            popupImg.src = img.src;         // Je lui donne la source de l'image cliqué
            popupImg.alt = img.alt;
        });
    });

    // fonction pratique pour fermer la fenêtre
    const closeFull = () => {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    };
    // On ferme si on clique sur la croix ou à côté de l'image
    if (closeBtn) closeBtn.onclick = closeFull;
    popup.onclick = (e) => { if (e.target === popup) closeFull(); };

    // Bonus IA fermer avec la touche
    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") closeFull();
    });
}

// 4. LE FORMULAIRE (L'aperçu en direct)
function initFormulaire() {
    // 1. On sélectionne tous les éléments nécessaires
    const btn = document.getElementById('btn-visualiser');
    const prenomInput = document.getElementById('prenom');
    const nomInput = document.getElementById('nom');
    const lienInput = document.getElementById('lien');
    const descInput = document.getElementById('description');
    const previewArea = document.getElementById('preview-area');
    const previewContent = document.getElementById('preview-content');

    // Si le bouton n'est pas sur la page, je stoppe tout
    if (!btn) return;

    // Je récupère les valeurs et j'enlève les espaces inutiles avec trim()
    btn.addEventListener('click', () => {
        const prenom = prenomInput.value.trim();
        const nom = nomInput.value.trim();
        const url = lienInput.value.trim();
        const texte = descInput.value.trim();

        // Si tout est bien rempli, je génère l'aperçu
        if (prenom && nom && url && texte) {
            previewArea.style.display = "block";

            // Je fabrique un petit bloc HTML pour montrer le résultat
            previewContent.innerHTML =
                //une boîte pour que l'aperçu soit joli 
                `
                <div style="border: 2px solid white; padding: 20px;
                background: rgba(255,255,255,0.1); color: white; 
                border-radius: 10px;">
                    <p style="text-transform: uppercase; font-weight: bold; color: #e74c3c;">
                        Contributeur : ${prenom} ${nom}
                    </p>
                         <img src="${url}" alt="Aperçu" 
                          style="max-width:100%; max-height:300px; border-radius:10px; margin-bottom:10px; display: block; margin-left: auto; margin-right: auto;">

                    <p><strong>Description / Passion :</strong> ${texte}</p>
                </div>
            `;

        } else {
            alert("Veuillez remplir tous les champs (Nom, Prénom, URL et Description) !");
        }
    });
}

// 5. LANCEMENT GLOBAL (Initialisation)
// J'attends que la page soit totalement chargée avant de lancer mes fonctions
window.onload = function () {
    chargerContenu(); // Affiche les séries (Game of Thrones, TWD, etc.)
    initFormulaire();  // Active le bouton du formulaire en bas de page
};
// 6. MENTIONS LÉGALES (Volet déroulant)
const volet = document.getElementById("monVolet");

volet.addEventListener('click', function () {
    if (volet.classList.contains("volet-invisible")) {
        // Je lance une petite animation d'ouverture (de 3em à 300px de haut)
        volet.animate([
            { height: "3em" },
            { height: "300px" }
        ], { duration: 500, easing: 'ease-out' });

        volet.classList.replace("volet-invisible", "volet-visible");
    } else {
        // Je le referme si on clique dessus à nouveau
        volet.classList.replace("volet-visible", "volet-invisible");
    }
});

