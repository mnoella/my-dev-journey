document.addEventListener('DOMContentLoaded', function () {
    const articles = [
        {
            id: 1,
            title: "Intégration dans l'entreprise: Premiers pas et découverte du monde professionnel",
            content: `
                <h1>Intégration dans l'entreprise</h1>
                <h2>Premiers pas et découverte du monde professionnel</h2>
                <p>Mon intégration dans l'entreprise a été une expérience marquante et enrichissante...</p>
                <p>Les premières semaines ont été consacrées à la découverte des outils et technologies...</p>
                <p>Ce qui m'a le plus impressionnée, c'est l'organisation fluide et l'environnement...</p>
                <p>Cette immersion m'a permis d'acquérir de solides bases sur les méthodologies employées...</p>
            `
        },
        {
            id: 2,
            title: "Mes missions principales chez Ichtus IT: Développement Web et défis techniques",
            content: `
                <h1>Mes missions principales chez Ichtus IT</h1>
                <h2>Développement Frontend et collaboration sur des applications mobiles</h2>
                <p>Pendant mon stage chez Ichtus IT, j'ai principalement travaillé sur des projets de développement frontend...</p>
                <p>Nous avons utilisé React Native avec Expo pour la partie mobile...</p>
                <h2>Collaborations et outils utilisés</h2>
                <p>Pour faciliter la gestion des projets, nous avons utilisé GitHub pour le contrôle de version...</p>
                <h2>Teny Zaraina : Gestion du backoffice</h2>
                <p>L'un des principaux projets sur lesquels j'ai travaillé est l'application Teny Zaraina...</p>
                <div class="carousel">
                    <img src="../images/temoignage1.png" alt="Gestion des témoignages">
                    <img src="../images/temoignage2.png" alt="Gestion des témoignages - Interface">
                    <img src="../images/louange1.png" alt="Gestion des chansons et louanges">
                    <img src="../images/louange2.png" alt="Interface des chansons et louanges">
                </div>
                <p>Ces captures d'écran montrent les sections que j'ai développées...</p>
                <h2>Défis rencontrés et apprentissages</h2>
                <p>L'un des principaux défis que j'ai rencontrés était de coordonner les différentes parties...</p>
            `
        },
        {
            id: 3,
            title: "Difficultés rencontrées et solutions: Un regard sur les obstacles",
            content: "Comme dans tout projet, j'ai rencontré des difficultés, mais j'ai également appris à trouver des solutions adaptées..."
        },
        // Ajoutez d'autres articles ici
    ];

    // Extraire l'ID de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id')) || 1;

    // Trouver l'article correspondant
    const article = articles.find(a => a.id === articleId);

    // Insérer le contenu de l'article dans la page
    if (article) {
        document.getElementById('article-content').innerHTML = article.content;
    }

    // Configurer les boutons "Précédent" et "Suivant"
    const prevButton = document.querySelector('.prev-article');
    const nextButton = document.querySelector('.next-article');

    prevButton.href = `post${articleId > 1 ? articleId - 1 : articles.length}.html`;
    nextButton.href = `post${articleId < articles.length ? articleId + 1 : 1}.html`;

    // Gestion du carrousel
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const images = carousel.getElementsByTagName('img');
        let currentIndex = 0;

        // Fonction pour afficher l'image suivante
        function showNextImage() {
            images[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.display = 'block';
        }

        // Fonction pour afficher l'image précédente
        function showPrevImage() {
            images[currentIndex].style.display = 'none';
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].style.display = 'block';
        }

        // Initialiser la première image
        for (let img of images) {
            img.style.display = 'none';
        }
        images[currentIndex].style.display = 'block';

        // Configurer le carrousel
        setInterval(showNextImage, 3000);

        // Zoom sur image lors du clic
        for (let img of images) {
            img.addEventListener('click', () => {
                img.classList.toggle('zoom');
            });
        }
    }
});
