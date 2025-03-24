// Fonction pour ouvrir/fermer le menu coulissant
document.getElementById('menu-toggle').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    sidebar.classList.toggle('active');
    body.classList.toggle('shifted');
});

// Fermer le menu si on clique en dehors
window.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');

    if (event.target !== sidebar && event.target !== menuToggle && !sidebar.contains(event.target)) {
        sidebar.classList.remove('active');
        document.body.classList.remove('shifted');
    }
});

// Vos autres fonctions existantes (afficherDetails, fermerDetails, etc.) restent inchangées
function afficherDetails(plat) {
    const modal = document.getElementById('detailsModal');
    const titre = document.getElementById('modalTitre');
    const description = document.getElementById('modalDescription');

    if (plat === 'burger') {
        titre.textContent = 'Burgers végé aux légumes et à l’oignon';
        description.textContent = 'Calories: 354.6, Proteins: 19.8g, Glucides: 98.2g, etc.';
    } else if (plat === 'casserole') {
        titre.textContent = 'Casserole de saucisses à la ratatouille';
        description.textContent = 'Détails sur la casserole de saucisses.';
    }

    modal.style.display = 'block';
}

function fermerDetails() {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('detailsModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
