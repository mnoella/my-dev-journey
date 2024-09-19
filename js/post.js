document.addEventListener('DOMContentLoaded', function () {
    const articles = [
        {
            id: 1,
            title: "Intégration dans l'entreprise: Premiers pas et découverte du monde professionnel",
            content: `
                <h1>Intégration dans l'entreprise</h1>
                <h2>Premiers pas et découverte du monde professionnel</h2>
                <p>Mon intégration dans l'entreprise a été une expérience marquante et enrichissante. Dès le premier jour, j'ai été accueillie avec bienveillance par une équipe dynamique et solidaire. Le cadre de travail bien structuré m'a permis de prendre rapidement mes repères, facilitant ainsi mon adaptation.</p>
                <p>Les premières semaines ont été consacrées à la découverte des outils et technologies utilisés au sein de l'entreprise. J'ai eu l'opportunité d'apprendre rapidement les outils et technologies, et d'échanger avec les différents membres de l'équipe pour me familiariser avec les projets en cours.</p>
                <p>Ce qui m'a le plus impressionnée, c'est l'organisation fluide et l'environnement de travail collaboratif. Le soutien de mes collègues et la clarté des processus ont facilité ma prise en main des projets. Les attentes étaient clairement définies, et j'ai pu bénéficier de l'accompagnement de l'équipe pour bien comprendre les processus internes.</p>
                <p>J'ai également eu la chance de me familiariser avec de nouvelles technologies telles que <a href="https://reactnative.dev/" target="_blank">React Native</a> et <a href="https://developer.android.com/studio/intro?hl=fr" target="_blank">Android Studio</a> grâce à mon équipe qui me les a bien introduites. J'ai ensuite approfondi mes connaissances en consultant leur documentation officielle, mais aussi à travers des vidéos YouTube.</p>
                <div class="image-container">
                    <img src="../images/react native.png" alt="React Native">
                    <img src="../images/android studio.png" alt="Android Studio">
                </div>
                <p>Pour le développement mobile avec <a href="https://docs.expo.dev/" target="_blank">Expo</a>, j'ai également utilisé la documentation sur leur site. Cette immersion dans ces nouvelles technologies a été facilitée par la disponibilité des ressources en ligne et l'accompagnement de mes collègues.</p>
                <img src="../images/expo.png" alt="Expo">
                <p>Cette immersion m'a permis d'acquérir de solides bases sur les méthodologies employées dans le développement web et sur les outils de collaboration comme GitHub et Trello. Cette période a marqué le début de mon parcours professionnel en développement web et a constitué une première étape réussie vers l'acquisition de nouvelles compétences.</p>
            `
        },
        {
            id: 2,
            title: "Mes missions principales chez Ichtus IT",
            content: `
                <h1>Mes missions principales chez Ichtus IT</h1>
                <h2>Développement Frontend et collaboration sur des applications mobiles</h2>
                <p>
                    Pendant mon stage chez Ichtus IT, j'ai principalement travaillé sur des projets de développement <strong>frontend</strong> pour des applications mobiles. Nous avons développé deux applications destinées principalement à une audience chrétienne malgache, à savoir <em>Teny Zaraina</em> et une application d'<em>Intercession</em>. Ce dernier on a envisagé de mettre plusieurs options de langues, Malgache, Français et Anglais.
                </p>
                
                <p>
                    Nous avons utilisé <a href="https://reactnative.dev/" target="_blank"><strong>React Native</strong></a> avec <strong><a href="https://docs.expo.dev/" target="_blank">Expo</a></strong> pour <em>Teny Zaraina</em> et <strong><a href="https://flutter.dev/" target="_blank">Flutter</a></strong> avec <strong>Dart</strong> et <strong>Android Studio</strong> pour <em>Intercession</em>, ce qui permettait une gestion efficace des différentes sections de l'application. Le travail d'équipe était crucial : nous étions trois développeurs, deux sur le frontend (dont moi) et un troisième sur le backend. 
                </p>

                <div class="image-container">
                    <img src="../images/flutter.png" alt="Flutter">
                    <img src="../images/androidstudio.png" alt="Android Studio">
                </div>

                <h2>Collaborations et outils utilisés</h2>

                <p>Pour faciliter la gestion des projets, nous avons utilisé <strong>GitHub</strong> pour le contrôle de version, un repository chacun pour le backend API, le backeoffice et l'application mobile. On a également utilisé <strong>Trello</strong>, spécialement pour l'application <em>Intercession</em> pour noté l'avancement du projet. Pour ce dernier j'ai concu un modèle sur <strong>Figma</strong>, à l'aide de mes compétences en <strong>UX Design</strong>. On a eu des réunions régulières avec le client proprétaire des applications pour aligner les objectifs, pour prendre notes des modifications nécessaires et prendre notes des nouvelles propositions de fonctionnalité des applications. Pour codé j'ai personnellement utilisé <strong>VS Code</strong>. Mon collègue qui s'occupait du backend API a utilisé <strong>Swagger</strong>, un outil que j'ai utilisés pour explorer un peu le backend API et pour faire des tests. </p>
                
                <h2>Teny Zaraina : Développement et gestion du backoffice</h2>
                <p>
                    Pour <em>Teny Zaraina</em>, mon rôle a été de développer une partie du <strong>backoffice</strong> pour l'administrateur de l'applicationJe me concentrais plus spécifiquement sur la gestion des <strong>témoignages</strong> (audios et vidéos) ainsi que la section dédiée aux <strong>chansons et louanges</strong>. Ceci impliquait la gestion de contenu et la présentation de ces informations pour les utilisateurs.
                </p>
                
                <div class="image-container">
                    <img src="../images/accueil teny zaraina app.png" alt="Gestion des témoignages">
                    <img src="../images/bo onglets.png" alt="Gestion des témoignages - Interface">
                </div>

                <div class="image-container">
                    <img src="../images/bo temoignage tous.png" alt="Gestion des témoignages">
                    <img src="../images/bo create temoignage.png" alt="Gestion des témoignages - Création">
                </div>

                <div class="image-container">
                    <img src="../images/bo modif supp temoignage.png" alt="Gestion des témoignages - Modification et suppression">
                    <img src="../images/bo hira tous.png" alt="Interface des chansons et louanges">
                </div>

                <div class="image-container">
                    <img src="../images/bo hira modif.png" alt="Interface des chansons et louanges - Modification">
                    <img src="../images/bo modif popup.png" alt="Interface des chansons et louanges - Popup">
                </div>

                <p>
                    Ces captures d'écran montrent les sections que j'ai développées pour la gestion des témoignages et des chansons/louanges. Vous pouvez observer l'interface de ces sections, qui permettent à l'administrateur de soumettre des témoignages en formats audio ou vidéos et des louanges, qui seront accessibles aux utilisateurs.
                </p>

                
                <h2>Intercession : Développement Frontend et gestion du backoffice</h2>
                <p>
                    Pour l'application <em>Intercession</em>, nous avons utilisé <strong><a href="https://flutter.dev/" target="_blank">Flutter</a></strong> avec <strong>Dart</strong>. J'ai principalement travaillé sur le frontend de l'application mobile.
                </p>
                <p>
                    L'application inclut plusieurs sections. Je me suis principalement chargée des statistiques sur les utilisateurs intercesseurs, représentées par des diagrammes en barres, et la gestion des profils utilisateur avec photo et informations. J'ai aussi pris en charge les thèmes de prières pour les intercesseurs, présentés sous forme de carousel.
                </p>
                <div class="image-container">
                    <img src="../images/signin int.png" alt="Inscription Intercession">
                    <img src="../images/ajout fake data.png" alt="Profil utilisateur Intercession">
                </div>

                <div class="image-container">
                    <img src="../images/stat.png" alt="Statistiques des utilisateurs Intercession">
                    <img src="../images/profil.png" alt="Profil utilisateur Intercession">
                </div>

                <div class="image-container">
                    <img src="../images/profil modif.png" alt="Profil utilisateur Intercession">
                    <img src="../images/carrousel img.png" alt="Carousel des thèmes de prières">
                </div>

                <div class="image-container">
                    <img src="../images/figma img.png" alt="Profil utilisateur Intercession">
                    <img src="../images/trello.png" alt="Gestion du projet Intercession avec Trello">
                </div>

                <div class="image-container">
                    <video controls width="370"> <source src="../images/figma vid.mp4" type="video/mp4" /> </video>
                    <video controls width="370"> <source src="../images/carrousel vid.mp4" type="video/mp4" /> </video>
                </div>

                <h2>Défis rencontrés et apprentissages</h2>
                <p>
                    L'un des principaux défis que j'ai rencontrés était de coordonner les différentes parties de l'application mobile, tout en intégrant les fonctionnalités du backend. Cependant, grâce à une bonne communication avec l'équipe et un suivi régulier des processus, j'ai pu surmonter ces obstacles et acquérir une expérience précieuse dans le développement d'applications mobiles.
                </p>
            `
        }
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

    prevButton.href = `post${articleId > 1 ? articleId - 1 : articles.length}.html?id=${articleId > 1 ? articleId - 1 : articles.length}`;
    nextButton.href = `post${articleId < articles.length ? articleId + 1 : 1}.html?id=${articleId < articles.length ? articleId + 1 : 1}`;
});