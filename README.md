SAÉ 1.05 - Produire un site web : "Ma Passion : Les Séries"
Étudiant : Hadrien CORNILLARD

Groupe : MMI 1 - B

Projet réalisé dans le cadre du BUT MMI - IUT de Marne-la-Vallée (2025-2026).

1. Accès en ligne
URL du site :  cornillard.projetsmmichamps.fr


2. Suivi Qualité
Lien vers le tableau de  Opquast : https://www.notion.so/Opquast-SA-1-05-Ta-passion-en-images-2e32dc36b764819db01ce7c2a1416789?source=copy_link


3. Installation Locale 
Ce projet utilise du JavaScript pour générer dynamiquement le contenu à partir d'un fichier de données. Bien que les données soient stockées dans un fichier .js, il est recommandé d'utiliser un serveur local pour une expérience de développement optimale.

Procédure d'installation avec XAMPP :

Prérequis : Avoir XAMPP installé sur la machine.

Dossier racine : Localisez le dossier `htdocs` de XAMPP.

Chemin standard : `C:\xampp\htdocs\`

Installation :

Créez un dossier nommé `sae105_series` dans `htdocs`.
 
Placez-y tous les fichiers du projet (`index.html`, `styles.css`, `script.js`, `data.js`et le dossier img)

Lancement du serveur :

Ouvrez le XAMPP Control Panel.

Démarrez le module Apache (bouton "Start").

Accès au site :

Ouvrez votre navigateur et allez à l'adresse : `http://localhost/sae105_series/index.html`

4. Notes Techniques
Architecture des données : Le contenu (Game of Thrones, The 100, etc.) est centralisé dans data.js. Cela permet de mettre à jour les textes ou les images sans modifier la structure HTML.

Fonctionnalités JavaScript : * Génération dynamique des sections au chargement de la page.

Système de modale (zoom) pour visualiser les portraits des personnages.

Formulaire de contribution avec prévisualisation en temps réel (DOM manipulation).

Gestion d'un volet déroulant animé pour les mentions légales dans le footer.

Design : Utilisation d'effets de parallaxe (background-attachment: fixed) et d'un système de classes colorées (color-1, color-2, etc.) pour différencier les univers de chaque série.

Technologies : HTML, CSS, JavaScript