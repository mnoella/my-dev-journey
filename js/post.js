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
                <div class="image-container">
                    <img src="../images/expo.png" alt="Expo">
                </div>
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
                    <img class="tel" src="../images/accueil teny zaraina app.png" alt="Gestion des témoignages">
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
                    <img class="tel" src="../images/signin int.png" alt="Inscription Intercession">
                    <img class="tel" src="../images/ajout fake data.png" alt="Profil utilisateur Intercession">
                </div>

                <div class="image-container">
                    <img class="tel" src="../images/stat.png" alt="Statistiques des utilisateurs Intercession">
                    <img class="tel" src="../images/profil.png" alt="Profil utilisateur Intercession">
                </div>

                <div class="image-container">
                    <img class="tel" src="../images/profil modif.png" alt="Profil utilisateur Intercession">
                    <img class="tel" src="../images/carrousel img.png" alt="Carousel des thèmes de prières">
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
        },

        {
            id: 3,
            title: "Difficultés rencontrées et solutions",
            content: `
                <h1>Difficultés rencontrées et solutions</h1>
                <h2>Première utilisation d'Android Studio et Expo Go</h2>

                <p>
                    Lors de mon stage, j'ai été confrontée à plusieurs défis techniques en utilisant <strong>Android Studio</strong> pour le développement de l'application <em>Intercession</em> et d'<strong>Expo Go</strong> pour <em>Teny Zaraina</em>. Ces outils étaient nouveaux pour moi et ont nécessité une période d'apprentissage pour les maîtriser efficacement. Avec la pratique, le soutien des collègues et au fil du projet, ça a été rapide de m'adapter.
                </p>

                <h2>Défis rencontrés avec Android Studio</h2>

                <p>
                    <strong>Android Studio</strong> est un environnement de développement intégré (IDE) puissant mais complexe. L'un des principaux défis était la configuration initiale de l'IDE, la gestion des différentes versions du SDK Android et réussir à afficher le télephone virtuel (Virtual Device). 
                </p>

                <p>
                    <strong>Solutions :</strong> Pour surmonter ces obstacles, j'ai consulté la documentation officielle d'Android Studio et suivi des tutoriels en ligne. J'ai également participé à des forums de développeurs pour poser des questions spécifiques et obtenir des conseils pratiques. Et encore une fois l'aide de mes collègues a été très importantes pour y arriver.
                </p>

                <div class="image-container">
                    <img src="../images/androidstudio.png" alt="Profil utilisateur Intercession">
                    <img src="../images/android studio device manager.png" alt="Gestion du projet Intercession avec Trello">
                </div>

                <h2>Défis rencontrés avec Expo Go</h2>

                <p>
                    <strong>Expo Go</strong> est une application mobile qui permet aux développeurs de tester et d'exécuter des applications React Native en utilisant la plateforme Expo (un ensemble d'outils et de services pour le développement d'applications mobiles en utilisant React Native) mais j'ai rencontré des difficultés lors de la configuration initiale surtout les problème de compatibilité ou de version.
                </p>

                <p>
                    <strong>Solutions :</strong> Les forums de la communauté sur <a href="https://discord.gg/wWeWe5pT" target="_blank"><strong>Discord</strong></a> m'ont aidé pour résoudre les problèmes. De plus, j'ai expérimenté avec des projets d'exemple pour mieux comprendre comment utiliser Expo Go efficacement.
                </p>

                <div class="image-container">
                    <img src="../images/expo2.png" alt="Profil utilisateur Intercession">
                </div>

                <div class="image-container">
                    <img src="../images/discord expo.png" alt="Gestion du projet Intercession avec Trello">
                </div>

                <h2>Apprentissages clés</h2>

                <p>
                    Ces expériences m'ont permis de développer des compétences importantes en gestion de projet et en résolution de problèmes techniques. La pratique avec Android Studio et Expo Go a enrichi mon savoir-faire en développement mobile, me préparant ainsi mieux pour des projets futurs.
                </p>
            `
        },

        {
            id: 4,
            title: "Acquisition de nouvelles compétences",
            content: `
                <h1>Acquisition de nouvelles compétences</h1>
                <h2>Apprentissage et perfectionnement</h2>

                <p>
                    Au cours de mon expérience professionnelle, j'ai eu l'opportunité d'acquérir de nouvelles compétences et de me perfectionner dans plusieurs domaines clés du développement web et mobile. Voici un aperçu des principales compétences que j'ai développées :
                </p>

                <h2>Développement avec React Native Expo et Flutter</h2>
                <p>
                    J'ai approfondi mes connaissances en développement mobile en utilisant <strong>React Native</strong> avec <strong>Expo</strong> et <strong>Flutter</strong> avec <strong>Dart</strong>. J'ai appris à créer des interfaces utilisateur réactives et à gérer les états de l'application de manière efficace. L'utilisation d'Expo et Android Studio a facilité le processus de développement et de test sur différents appareils.
                </p>

                <h2>Gestion des API et intégration avec Swagger</h2>
                <p>
                    J'ai également travaillé avec des API backend en utilisant <strong>Swagger</strong> pour documenter et tester les endpoints. Cette expérience m'a permis de comprendre comment les API sont conçues, testées et intégrées dans les applications frontend.
                </p>

                <div class="image-container">
                    <img src="../images/swagger tz.png" alt="Swagger Teny Zaraina">
                    <img src="../images/swagger.png" alt="Swagger Teny Zaraina">
                </div>

                <h2>Utilisation de GitHub pour la gestion de version</h2>
                <p>
                    La gestion du code source et la collaboration en équipe ont été facilitées par l'utilisation de <strong>GitHub</strong>. J'ai appris à utiliser les branches, à gérer les pull requests et à résoudre les conflits de fusion.
                </p>

                <div class="image-container">
                    <img src="../images/git backend.png" alt="Swagger Teny Zaraina">
                    <img src="../images/git bo.png" alt="Swagger Teny Zaraina">
                </div>

                <div class="image-container">
                    <img src="../images/git app.png" alt="Github Teny Zaraina">
                </div>

                <h2>Défis rencontrés et solutions</h2>
                <p>
                    L'apprentissage de ces nouvelles compétences n'a pas été sans défis. J'ai dû faire face à des problèmes complexes liés à la gestion des états dans React Native, à la compréhension des spécifications des API, et à la résolution des conflits de code dans GitHub. Cependant, chaque défi m'a permis d'approfondir mes connaissances et de devenir plus compétent dans mon domaine.
                </p>

            `
        },

        {
            id: 5,
            title: "Mon bilan de stage chez Ichtus IT",
            content: `
                <h1>Mon bilan de stage chez <a href="https://www.ichtus-it.com/" target="_blank">Ichtus IT</a></h1>

                <h2>Ce que j'ai aimé</h2>
                <p>
                    Mon stage chez Ichtus IT a été une expérience incroyablement enrichissante. J'ai particulièrement apprécié la possibilité de travailler sur des projets d'applications mobiles, ce qui m'a permis de développer de nouvelles compétences techniques tout en collaborant avec une équipe très accueillante et supportive. La diversité des tâches et la liberté créative m'ont permis de m'impliquer pleinement dans les projets.
                </p>

                <h2>Ce qui m'a surpris</h2>
                <p>
                    Ce qui m'a le plus surpris, c'est la rapidité avec laquelle j'ai pu m'intégrer dans l'équipe et la manière dont mes contributions ont été valorisées. J'ai été impressionnée par l'innovation et la flexibilité de l'entreprise, ainsi que par la manière dont elle adopte les nouvelles technologies pour améliorer ses projets.
                </p>

                <h2>Compétences acquises</h2>
                <p>
                    Durant ce stage, j'ai acquis de solides compétences en développement mobile avec React Native et Expo. J'ai également appris à utiliser des outils de gestion de version comme GitHub et à documenter des API avec Swagger. Au-delà des compétences techniques, j'ai développé des compétences humaines telles que la communication efficace, la collaboration en équipe et la gestion du temps.
                </p>

                <h2>Ressenti personnel</h2>
                <p>
                    Mon expérience chez Ichtus IT a véritablement élargi mes horizons professionnels et m'a permis de renforcer ma passion pour le développement. J'ai gagné en confiance quant à mes choix professionnels et académiques. Cette immersion m'a confirmé mon désir de devenir développeuse tout en restant polyvalente et ouverte à explorer divers aspects de la technologie.
                </p>

                <h2>Impact sur mes objectifs professionnels et académiques</h2>
                <p>
                    Ce stage a renforcé mon engagement envers ma carrière en développement. Il m'a non seulement permis de confirmer ma passion pour ce domaine, mais il m'a également donné un aperçu précieux des technologies actuelles et des meilleures pratiques. Je suis désormais plus déterminée à poursuivre mes objectifs professionnels tout en continuant à explorer et à apprendre.
                </p>

                <h2>Suggestions d'améliorations</h2>
                <p>
                    Bien que l'expérience ait été globalement positive, il serait bénéfique d'intégrer davantage de sessions de feedback régulières pour permettre une amélioration continue des projets. De plus, je souhaite particulièrement travailler sur ma capacité à proposer des idées et à prendre des initiatives de manière plus proactive dans mes futures expériences professionnelles. Cela m'aidera à contribuer plus efficacement aux projets et à maximiser mon apprentissage.
                </p>

                <h2>Remerciements</h2>
                <p>
                    Je tiens à remercier sincèrement toute l'équipe de Ichtus IT pour leur accueil et leur soutien constant. Un merci tout particulier au Directeur d'Ichtus, Ny Hakanto RATREMA, pour sa confiance et son encadrement précieux.
                </p>
            `
        },
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

    // boutons "Previous" et "Next"
    const prevButton = document.querySelector('.prev-article');
    const nextButton = document.querySelector('.next-article');

    prevButton.href = `post${articleId > 1 ? articleId - 1 : articles.length}.html?id=${articleId > 1 ? articleId - 1 : articles.length}`;
    nextButton.href = `post${articleId < articles.length ? articleId + 1 : 1}.html?id=${articleId < articles.length ? articleId + 1 : 1}`;
});