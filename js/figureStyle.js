function figure(name, def, ex) {
    return {
        name: name,
        def: def,
        ex: ex
    };
};


window.data = [
    figure(
        "Répétition",
        "Réutilisation, reprise d'un mot ou groupe de mots => Insistance.",
        "C'est un très très gros ballon."
    ),
    
    figure(
        "Anaphore",
        "Reprise d'un mot ou grp de mots en début de vers, phrase ou proposition => Insitance.",
        "Paris outragé, Paris libéré."
    ),

    figure(
        "Épiphore",
        "Reprise mot ou groupe de mots en fin de vers de phrase ou de proposition.",
        "Et toujours ce parfum de foin coupé qui venait de Bérénice qui résumait Bérénice, qui le pénétrait de Bérénice (Louis Aragon)."
    ),

    figure(
        "Comparaison",
        "Rapprochement entre deux éléments à l'aide d'un outil de comparaison.",
        "Elle est bleue comme le ciel."
    ),

    figure(
        "Métaphore",
        "Rapprochement entre 2 éléments sans mots de comaparaison.",
        "Les deux étoiles vertes de se regard."
    ),

    figure(
        "Euphémisme",
        "Atténuation de certaines idées, réalités, qui peuvent déplaire ou être brutal, choquant.",
        "Une personne est partie."
    ),
    figure(
        "Personnification",
        "Fait d'accorder un ou plusieurs caractéristriques propres à l'homme à un animal ou une chose.",
        "Les bras d'une chaise."
    ),
    figure(
        "Allégorie",
        "Représentation concrète d'une réalité abstraite.",
        "La colombe désigne la paix."
    ),
    figure(
        "Réification",
        "Déshumanisation d'un personnage humain de manière globale, présenter un être vivant en objet.",
        "Les gens sont de simples ressorts."
    ),
    figure(
        "Métonymie",
        "Fait de remplacer un élément par un autre entretenant un lien logique avec.",
        "Boire un verre."
    ),
    figure(
        "Synecdoque",
        "Fait de désigner le tout en évoquant juste une de ses parties.",
        "Je cherche un toit pour la nuit."
    ),
    figure(
        "Litote",
        "Fait de dire le moins pour en réalité suggérer le plus.",
        "Je ne te hais point. <i>Le Cid</i>"
    ),
    figure(
        "Hyperbole",
        "Exagération.",
        "Je n'en peux plus / Je meurs de faim."
    ),
    figure(
        "Énumération",
        "Liste de mots de même nature ou de même fonction.",
        "Dans mon jardin, il y a des fraises, des cerises, des pêches et des bananes."
    ),
    figure(
        "Gradation croissante",
        "Suite de mots classée du moins fort au plus fort (Idée de montée en puissance).",
        "Depuis le temps qu'elle me suit à la trace, me colle à la peau, me ronge les os."
    ),
    figure(
        "Gradation décroissante",
        "Suite de termes classée du plus fort au moins fort (Idée d'affaiblissement).",
        "Triste, morause, neutre."
    ),
    figure(
        "Antithèse",
        "Fait d'utiliser 2 mots de sens opposé dans une même phrase.",
        "A vaincre sans périr, au triomphe sans gloire / Plus il fait chaud, plus il fait froid."
    ),
    figure(
        "Oxymore",
        "Fait de coller 2 mots opposés afin de créer une entité surprenante.",
        "Un silence éloquant / Une douce violence."
    ),
    figure(
        "Parallélisme",
        "Reprise symétrique de la même structure grammatical.",
        "Dieu aima les oiseaux l'homme aima les oiseaux."
    ),
    figure(
        "épanaphore",
        "répétition stylistique d'une même formule et d'une même structure au début de phrases successives.",
        "Tout le bas, tout le faible et tout l'indigne s'y trouvent (<i>La Bruyère</i>)."
    ),
    figure(
        "Chiasme",
        "Reprise inversée de la structure et parfois du sens.",
        "Il faut manger pour vivre et non vivre pour manger."
    ),
    figure(
        "Prétérition",
        "Fait de prétendre qu'on ne va pas dire ce que l'on s'empresse de dire.",
        "Inutile de vous rappeler de l'importance de voter."
    ),

    figure(
        "Analexe",
        "Retour arrière (flashback).",
        "Il s'en rappela, qu'il y a 10 ans."
    ),
    figure(
        "Prolepse",
        "figure d'anticipation.",
        "J'aurais mon bac."
    ),
    figure(
        "Allitération",
        "répétition d'un même son consonne.",
        "Quels sont ces serpents qui sifflent sur vos têtes, Jean Racine."
    ),
    figure(
        "Assonance",
        "Répétition d'un même son voyelle.",
        "Les vendredis sanglants et lent d'enterrement."
    ),
    figure(
        "Prosopopée",
        "Fait de faire parler un personnage absent ou mort.",
        "Cerf utilise la Lionne, <i>Les obsèques de la Lionne</i>."
    ),
    figure(
        "Syllepse",
        "Fait de faire l'accord en fonction du sens et non des règles du sens.",
        "Un groupe d'élèves attendaient (au lieu de attendait) => Insiste grand nombre d'élèves."
    ),
    figure(
        "Paronomase",
        "Consiste à prendre des mots qui se ressemblent (paronyme).",
        "Qui se ressemble s'assemble."
    ),
    figure(
        "Périphrase",
        "Fait de remplacer un mot par une expression qui l'a définit où l'explique.",
        "Paris, la capitale de la France."
    ),
    figure(
        "Asyndète",
        "Enchaînement de mots, propositions sans mot de liasion.",
        "Je me lève, lave, boit, mange, avant d'entamer mon cours."
    ),
    figure(
        "polysyndète",
        "Répétition excessif de mot coordinant (inverse de asyndète ).",
        "Soit lui, soit moi, soit un autre."
    ),
    figure(
        "Polyptote",
        "Reprise mot sous formes différentes => Insistance.",
        "Je suis tombé déjà, je puis tomber encore, <i>Les Contemplations</i>, Victor Hugo."
    ),
    figure(
        "Antiphrase",
        "Dire l'inverse de ce que l'on pense (explicite), support majeur de l'ironie.",
        "Tu as eu 0, bravo !"
    ),
    figure(
        "Pléonasme",
        "Fait de répéter des mots de même sens dans une phrase.",
        "Monter en haut, descendre en bas."
    ),
    figure(
        "Hypallage",
        "Figure de déplacement / Fait d'associer un mot à un élément de la phrase alors qu'il irait mieux à un autre mot.",
        "Rendre qqn à la vie pour rendre la vie à qqn."
    ),
    figure(
        "antonomase",
        "fait d'utiliser un nom propre ou commun pour designer une catégorie typique de personne.",
        "Un don Juan  pour un grand séducteur."
    ),
]