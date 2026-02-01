// 1. STOCKAGE DES DONNÉES (Base de données locale)
// On utilise un tableau d'objets pour centraliser toutes les informations du site.
// Cela permet de modifier le texte ou les images sans toucher au code HTML.
const passionData = [
    {
        id: "Got",
        titre: "Game of Thrones",
        bgClass: "bg-1",       // Classe CSS pour l'image de fond fixe
        colorClass: "color-1", // Classe CSS pour la couleur de la section texte
        image: "img/Jon Snow.jpg",
        alt: "Jon Snow",
        source: "Pinterest - @cclaerbout",
        sourceUrl: "https://pin.it/59HZeKF13",
        texte: `
        <h3 class="titre-passion">De quoi parle Game of Thrones ? </h3>

        <p>Sur le vaste continent de Westeros, sept grandes familles coexistent sous l’autorité d'un seul Roi. Mais cet équilibre fragile vole en éclats à sa mort.
        Une guerre totale se déclare alors : c'est la "Guerre des Cinq Rois". Trahisons, alliances secrètes et complots politiques deviennent les armes principales pour s'emparer du Trône de Fer, le siège du pouvoir suprême.
        Pendant que les seigneurs se battent pour la couronne, tout en haut du continent, un immense Mur de glace se dresse comme dernier rempart. Construit il y a des millénaires, il est censé protéger le royaume contre...</p>

        <h3 class="titre-passion">Pourquoi Game of Thrones est ma série préférée ?</h3>
            
        <p>Game of Thrones est la seule série qui m'ait rendu aussi addict. C’est simple : je pouvais regarder une saison entière en deux jours seulement ! Cette addiction vient de l'histoire, du suspense et de la tension permanente. Ce qui rend l'intrigue si imprévisible, c'est qu'à tout moment, un personnage important peut mourir. On ne se sent jamais en sécurité pour nos favoris.Ce que j'aime le plus, c'est l'immensité de l'univers et la complexité des personnages. Ils ont tous des faiblesses et personne n'est totalement gentil ou méchant. Chaque famille a son propre passé, son territoire et son honneur. Dans cette série, aucune scène n'est là par hasard : chacune sert à montrer la peur, le courage ou la trahison.</p>

        <h3 class="titre-passion">Pourquoi l'image de Jon Snow ?</h3>
        <p>J'ai choisi Jon Snow car c'est l'un de mes personnages préférés. C'était difficile de n'en choisir qu'un, car je pensais aussi à Daenerys Targaryen, Tyrion Lannister ou Arya Stark. Si j'ai finalement choisi Jon, c'est parce que son parcours est fascinant, il commence au plus bas, rejeté et mis à l'écart en tant que "bâtard". Pourtant, grâce à son courage, son sens de l'honneur et sa détermination, il gravit les échelons pour devenir l'un des personnages les plus importants de l'histoire. C'est un exemple de résilience dans un monde où tout semblait contre lui.</p>
        `    },
    {
        id: "The100",
        titre: "The 100",
        bgClass: "bg-2",
        colorClass: "color-2",
        image: "img/lexa.jpg",
        alt: "Lexa kom Trikru",
        source: "Pinterest - @vastgiveaways",
        sourceUrl: "https://pin.it/67lbekkOH",
        texte: `
         <h3 class="titre-passion">De quoi parle The 100 ? </h3>

        <p>Près de 100 ans après une apocalypse nucléaire, les derniers survivants de l'humanité vivent dans une station spatiale appelée l'Arche, regroupant 12 nations. Dans ce refuge, les ressources sont si rares que la loi est impitoyable : chaque crime commis par un adulte est puni par la "dérive" (l'exécution dans l'espace). Cependant, les mineurs, eux, sont emprisonnés en attendant leur majorité. Face à une panne critique d'oxygène, les dirigeants prennent une décision désespérée : envoyer 100 délinquants mineurs sur Terre pour tester si la planète est de nouveau habitable.Mais une fois sur le sol, ces adolescents découvrent que tout ne se passe pas comme prévu... Ils ne sont pas seuls.</p>

        <h3 class="titre-passion">Pourquoi The 100 est l'une de mes série préférée ?</h3>
            
        <p>The 100 est l'une de mes séries préférées car elle a bercé ma jeunesse. Les quatre premières saisons sont tout simplement incroyables ; je les ai d'ailleurs revues au moins quatre fois. En revanche, les saisons 5 à 7 m'ont moins séduit, ce qui explique pourquoi elle n'occupe pas la première place de mon classement. La série aborde des thèmes puissants comme la responsabilité, les choix cornéliens, l'amitié et la loyauté. J'apprécie particulièrement l'évolution des personnages au sein de ce monde dévasté. Bien qu'elle soit initialement étiquetée comme une série pour adolescents, elle a su me captiver et je prends toujours autant de plaisir à la regarder aujourd'hui.</p>

        <h3 class="titre-passion">Pourquoi l'image de Lexa kom trikru ?</h3>
        <p>J’ai choisi l’image de Lexa parce qu’elle est l’un des personnages les plus puissants, marquants et symboliques de la série. Lexa n’est pas seulement une leader guerrière, c’est une figure de courage, de stratégie et de détermination. Elle représente la force, la discipline, mais aussi la complexité émotionnelle. Elle veut protéger son peuple mais elle doit toujours faire des choix difficiles. Lexa incarne l’esprit de The 100 : survivre, diriger, protéger, mais sans perdre complètement son cœur. Son charisme, sa froideur apparente et son intelligence en font un personnage impossible à oublier. Visuellement aussi, elle impose le respect : son maquillage de guerre, son armure, son attitude… elle dégage une aura unique qui résume parfaitement l’ambiance de la série. C’est pour ça que son image est la meilleure pour représenter ton attachement à The 100.</p>
        `    },
    {
        id: "TWD",
        titre: "The Walking Dead",
        bgClass: "bg-3",
        colorClass: "color-3",
        image: "img/rick grimes.jpg",
        alt: "Rick Grimes",
        source: "Pinterest - @johnotfound",
        sourceUrl: "https://fr.pinterest.com/johnotfound/",
        texte: `
        <h3 class="titre-passion">De quoi parle The walking dead ? </h3>

        <p>Après une épidémie mystérieuse qui a transformé la majeure partie de la population mondiale en "rôdeurs" (des morts-vivants affamés), le monde a sombré dans le chaos. L'histoire suit Rick Grimes, un adjoint du shérif qui se réveille d'un coma pour découvrir cette nouvelle réalité cauchemardesque. Il part à la recherche de sa famille et prend la tête d'un groupe de survivants. Ensemble, ils doivent non seulement échapper aux morts qui ne s'arrêtent jamais, mais aussi — et surtout — faire face à la cruauté des vivants qui luttent pour le pouvoir et les ressources dans un monde sans lois.
        </p>

        <h3 class="titre-passion">Pourquoi The walking dead est l'une de mes série préférée ?</h3>
            
        <p>The Walking Dead est une série qui m'a profondément marqué par son intensité et son réalisme psychologique. Tout comme pour The 100, les premières saisons sont pour moi des chefs-d'œuvre de tension et de narration que j'ai pris plaisir à redécouvrir plusieurs fois. Ce qui me passionne, c'est de voir comment des gens ordinaires se transforment face à l'horreur. La série pose des questions fondamentales : jusqu'où peut-on aller pour protéger ceux qu'on aime ? Peut-on rester humain dans un monde qui ne l'est plus ? L'évolution des personnages, qui passent de citoyens normaux à de véritables guerriers endurcis, est tout simplement fascinante.</p>

        <h3 class="titre-passion">Pourquoi l'image Rick Grimes ?</h3>
        <p>J’ai choisi l’image de Rick Grimes parce qu’il est le pilier central et le symbole absolu de la survie dans la série. Rick incarne la transition brutale entre l'ancien monde et le nouveau : il commence en tant que shérif cherchant la justice et finit par devenir un leader prêt à tout, parfois même au prix de sa propre humanité, pour assurer la survie de son groupe. Son regard fatigué mais déterminé, son évolution physique au fil des épreuves et sa capacité à porter le poids des décisions impossibles sur ses épaules en font un personnage iconique. Il représente parfaitement l'idée que, dans ce monde dévasté, la plus grande menace n'est pas la mort, mais ce que l'on devient pour rester en vie.</p>
        `    },
    {
        id: "Dexter",
        titre: "Dexter",
        bgClass: "bg-4",
        colorClass: "color-4",
        image: "img/dexter.jpg",
        alt: "Dexter Morgan",
        source: "Pinterest - @helenxyea",
        sourceUrl: "https://pin.it/7tzVatSEG",
        texte: `
        <h3 class="titre-passion">De quoi parle Dexter ?</h3>
            
        <p>Dexter Morgan est un expert en analyse de traces de sang pour la police de Miami le jour, mais il cache une identité terrifiante : la nuit, il est un tueur en série méticuleux. Cependant, il suit un "code" strict transmis par son père adoptif, Harry : il ne tue que des criminels ayant échappé au système judiciaire. La série explore sa double vie, sa lutte pour paraître humain aux yeux de sa sœur Debra et de ses collègues, tout en gérant son "Passager Noir", cette pulsion intérieure qui le pousse irrémédiablement à commettre l'irréparable.</p>
        
        <h3 class="titre-passion">Pourquoi Dexter est l'une de mes série préférée ?</h3>
            
        <p>Dexter est une série qui m’a marqué parce qu’elle est totalement différente des autres. Elle ne raconte pas simplement la vie d’un enquêteur ou d’un héros traditionnel, mais celle d’un personnage complexe, sombre, et fascinant : Dexter Morgan. La série mélange le suspense, le drame psychologique et une ambiance unique qui te plonge dans la tête d’un homme qui mène une double vie. C’est ce contraste qui rend la série si addictive : le jour, il travaille pour la police scientifique de Miami ; la nuit, il devient un tueur en série qui ne cible que ceux qui ont échappé à la justice. Ce qui m’a plu dans Dexter, c’est la façon dont la série nous fait suivre un personnage qui lutte constamment contre lui-même. Dexter n’est pas juste un tueur : c’est quelqu’un qui essaie de comprendre sa propre nature, ses démons, son passé traumatisant, tout en essayant de jouer un rôle normal dans la société. On ressent à la fois son intelligence, son humour noir, son contrôle extrême, mais aussi ses moments de doute et ses questionnements sur qui il est vraiment. Cette dualité entre ses instincts et sa volonté de paraître “normal” rend la série captivante du début à la fin.</p>

        <h3 class="titre-passion">Pourquoi l'image Rick Grimes ?</h3>
        <p>Dexter Morgan est mon personnage préféré parce qu’il est unique, complexe et profondément humain malgré son côté monstrueux. Il suit un code, celui que lui a appris  (son père), pour canaliser ses pulsions et les diriger vers des criminels. Cela donne au personnage une dimension morale qui n’existe dans aucune autre série : Dexter n’est ni un héros, ni un méchant. Il est entre les deux. Et c’est ce côté ambigu qui le rend si intéressant à suivre. Ce qui rend Dexter Morgan encore plus fascinant, c’est son évolution. Au début, il se voit comme quelqu’un incapable d’émotions réelles, mais au fil des saisons, on découvre qu’il est capable d’aimer, de protéger, de s’attacher, même s’il ne le montre pas comme les autres. Il essaie de concilier ses sentiments et sa nature sombre, ce qui crée des situations intenses et parfois tragiques.</p>
        `    },
];
