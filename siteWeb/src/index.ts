import express from "express";
import nunjucks from "nunjucks";

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(express.static("public")); //acces au dossier
app.set("view engine", "njk");

//création de route
app.get("/", (request, response) => {
  response.render("home");
});

//route articles
app.get("/blog/articles/:articleName", (request, response) => {
  const routeParameters = request.params;
  const article = routeParameters.articleName;

  const listeOfArticles = [
    {
      title: "article_one",
      name: "Après l'arrêt de la version papier de Metronews, 20 Minutes et Direct Matin peaufinent leurs stratégies d'expansion. Et misent gros sur leur potentiel publicitaire.My Awesome Product",
      description:
        "Deux mois après l'arrêt de la version papier de Metronews, 20 Minutes et Direct Matin se frottent les mains.Le passage de trois à deux quotidiens gratuits d'information a redonné un peu d'air sur un marché à bout de souffle, doublement frappé par la crise publicitaire et l'essor des supports numériques.Pour l'heure, les deux titres survivants bombent le torse, même si l'arrêt de la version papier de leur concurrent ne leur a pas permis de gagner beaucoup de nouveaux lecteurs, l'écrasante majorité du lectorat de Metronews lisant déjà 20 Minutes et/ou Direct Matin. Les deux titres revendiquent respectivement 4 millions et 2,5 millions de lecteurs quotidiens, en majorité des jeunes urbains actifs, cible chérie par les annonceurs.Après avoir réduit la voilure l'an dernier, 20 Minutes a renforcé pour la rentrée son réseau de 120 points de distribution, le portant à plus de 3000, pour une diffusion totale de 980.000 exemplaires (en hausse de 40.000). Le leader a accru sa présence dans les grandes…",
    },
    {
      title: "article_two",
      name: "Le journal gratuit a édité ce vendredi son dernier numéro. La marque va toutefois continuer à exister sur Internet.",
      description:
        "Les vacances d'été sont souvent synonyme de pause dans la parution des journaux gratuits. Mais pour Metronews, cet arrêt est définitif.Le tout dernier numéro du quotidien du groupe TF1 a été distribué ce vendredi matin devant les arrêts de métro, de bus et de tram des principales villes françaises.Pour l'occasion, un cahier «souvenirs» de quatre pages a été inséré dans le journal.Il revient sur les unes les plus marquantes et sur les stars ayant rendu visite à la rédaction au cours des treize années d'existence du titre.Mais il ne s'agit pas d'un adieu. La marque Metronews va continuer à exister sur Internet, grâce au site et à l'application mobile.«C'est notre objectif à compter de maintenant: continuer à vous informer chaque jour, chaque minute, où que vous soyez», écrit le rédacteur en chef du titre, Christophe Jolly.Metronewsa, tout comme son concurrent 20 Minutes, réussit sa mue numérique et compte plus de 3 millions de visiteurs uniques par mois sur son site.En ajoutant le site mobile et l'application, ce sont 6,5 millions d'internautes qui consultent chaque mois les articles du titre.Ce dernier est également très présent sur Facebook, un puissant pourvoyeur d'audience.",
    },
    {
      title: "article_three",
      name: "Olivier Bonsart : «20 Minutes devrait profiter de l'arrêt de l'édition papier de Metronews»",
      description:
        "Olivier Bonsart est président de 20 Minutes France depuis septembre 2012.Il est par ailleurs directeur délégué de Sipa/Ouest France et président du conseil de surveillance de Publihebdos, filiale de Sipa/Ouest France spécialisée dans l'édition et la publication d'hebdomadaires locaux d'information.Après les annonces de l'arrêt de la publication papier de Metronews (groupe TF1) et de l'arrivée au capital de 20 Minutesdu belge Rossel (groupe Voix du Nord en France), le patron réaffirme les ambitions de 20 Minutes.LE FIGARO.- Après l'arrivée au capital du groupe Rossel, qui reprend la participation du norvégien Schibsted, Sipa/Ouest France veut-il rester actionnaire de 20 Minutes?Olivier BONSART. - Le groupe Ouest France compte bien rester dans 20 Minuteset n'a aucune intention de céder sa participation.Pourquoi Ouest France quitterait la première marque d'information en France, au contact de 19 millions de Français qui la consultent chaque mois, et l'une des premières marques numériques…",
    },
    {
      title: "article_four",
      name: "La presse gratuite réduit fortement la voilure pour faire des économies",
      description:
        "Ce matin, aucun crieur ne vous a proposé de lire Metronews dans les transports.Le quotidien gratuit a en effet décidé de ne pas paraître en version papier pendant au moins cinq jours durant le mois de janvier.L'édition devrait être remplacée par un PDF téléchargeable sur le site Metronews.fr.Une mesure temporaire et conjoncturelle: Metronews doit faire face à une contraction du marché publicitaire, sur lequel ses revenus sont en recul sur les neuf premiers mois de l'année, d'après les derniers résultats trimestriels du groupe TF1, sa maison mère.",
    },
  ];
  let articleTitleSelected = "";
  let articleNameSelected = "";
  let articleDescriptionSelected = "";
  const affiche = true;
  listeOfArticles.forEach((element) => {
    if (element.title === article) {
      articleTitleSelected = element.title;
      articleNameSelected = element.name;
      articleDescriptionSelected = element.description;
    }
  });

  response.render("blog", { articleTitleSelected, articleNameSelected, articleDescriptionSelected, affiche });
});

//route hobbies

app.get("/hobbies/:selected", (request, response) => {
  const routeParameters = request.params;
  const hobbiesSelected = routeParameters.selected;
  let hobbiesSend = [{}];
  const affiche = true;

  const artistes = [
    {
      name: "Johnny Hallyday",
      logo: "/images/hobbies/artistes/JohnnyHallydayLogo.png",
      lien: "/hobbies/artistes/johnnyHallyday",
    },
    {
      name: "Simon & Garfunkel",
      logo: "/images/hobbies/artistes/Simon&GarfunkelLogo.png",
      lien: "/hobbies/artistes/SimonAndGargunkel",
    },
    {
      name: "Era",
      logo: "/images/hobbies/artistes/eraLogo.png",
      lien: "/hobbies/artistes/era",
    },
  ];
  const films = [
    {
      name: "Captain America",
      logo: "/images/hobbies/films/CaptainAmericaLogo.png",
      lien: "/hobbies/films/captainAmerica",
    },
    {
      name: "Iron Man",
      logo: "/images/hobbies/films/IronManLogo.png",
      lien: "/hobbies/films/ironMan",
    },
    {
      name: "Spider Man",
      logo: "/images/hobbies/films/SpidermanLogo.png",
      lien: "/hobbies/films/spiderMan",
    },
  ];
  const livres = [
    {
      name: "Naruto",
      logo: "/images/hobbies/livres/NarutoLogo.png",
      lien: "/hobbies/livres/naruto",
    },
    {
      name: "Dragon ball Z",
      logo: "/images/hobbies/livres/DragonBallZLogo.png",
      lien: "/hobbies/livres/dragonBallZ",
    },
    {
      name: "One piece",
      logo: "/images/hobbies/livres/OnePieceLogo.png",
      lien: "/hobbies/livres/onePiece",
    },
  ];
  const loisirs = [
    {
      name: "Cyclisme",
      logo: "/images/hobbies/loisirs/CyclismeLogo.png",
      lien: "/hobbies/loisirs/cyclisme",
    },
    {
      name: "Running",
      logo: "/images/hobbies/loisirs/RunningLogo.png",
      lien: "/hobbies/loisirs/running",
    },
    {
      name: "Guitare",
      logo: "/images/hobbies/loisirs/GuitareLogo.png",
      lien: "/hobbies/loisirs/guitare",
    },
  ];
  if (hobbiesSelected === "artistes") {
    hobbiesSend = artistes;
  } else if (hobbiesSelected === "films") {
    hobbiesSend = films;
  } else if (hobbiesSelected === "livres") {
    hobbiesSend = livres;
  } else if (hobbiesSelected === "loisirs") {
    hobbiesSend = loisirs;
  }

  response.render("hobbies", { hobbiesSend, affiche });
});

//route hobbies details artistes
app.get("/hobbies/artistes/:selected", (request, response) => {
  const routeParameters = request.params;
  const hobbiesSelected = routeParameters.selected;

  const affiche = true;
  const afficheDetails = true;

  const artistes = [
    {
      id: "johnnyHallyday",
      name: "Johnny Hallyday",
      logo: "/images/hobbies/artistes/JohnnyHallydayLogo.png",
      lien: "/hobbies/artistes/johnnyHallyday",
      description:
        "Johnny Hallyday, de son vrai nom Jean-Philippe Smet, est un chanteur, compositeur et acteur français, né le 15 juin 1943 à Paris 9e arr. et mort le 5 décembre 2017 à Marnes-la-Coquette (Hauts-de-Seine).Durant ses 57 ans de carrière, il s'impose comme l'un des plus célèbres chanteurs francophones et l'une des personnalités les plus présentes dans le paysage médiatique français.S'il n'est pas le premier à chanter du rock en France, il est, à partir de 1960, le premier à populariser le genre dans l'Hexagone. Bien qu'il ait interprété de nombreuses ballades sentimentales et des airs country au cours de sa carrière, le rock reste sa principale référence au travers de ses différents courants, puisant tous leurs origines dans le blues : rock 'n' roll, rhythm and blues, soul, rock psychédélique, soft rock ou encore pop rock.Sa longévité au premier plan de la scène artistique et ses prestations vocales et scéniques lui attirent la reconnaissance de ses pairs et du public. Au total, il réalise 80 albums, dont 51 albums studio. Il totalise 6 disques de diamant, 40 disques d'or, 22 disques de platine et 10 Victoires de la musique. En dehors des pays francophones, s'il ne parvint pas à s'imposer durablement malgré plusieurs tournées à succès, notamment en Amérique du Sud, sa réputation d'homme de scène franchit en revanche les frontières. Il effectue ainsi 184 tournées et donne plus de 3 250 concerts, totalisant près de 30 millions de spectateurs, avec des prestations à gros budgets et effets scéniques. Alors qu'il est atteint d'un cancer du poumon, il effectue sa dernière tournée en juin et juillet 2017, aux côtés de ses amis Jacques Dutronc et Eddy Mitchell, avec qui il a formé le trio des Vieilles Canailles. Sa mort, survenue quelques mois plus tard des suites de sa maladie, donne lieu à un important hommage populaire. Au moment de sa mort, les ventes de ses disques se chiffrent à 110 millions d'exemplaires.",
    },
    {
      id: "SimonAndGargunkel",
      name: "Simon & Garfunkel",
      logo: "/images/hobbies/artistes/Simon&GarfunkelLogo.png",
      lien: "/hobbies/artistes/SimonAndGargunkel",
      description:
        "Simon and Garfunkel [ˈsaɪmən ən gɑrfʌnkəl]1 est un duo américain de folk rock, originaire de Forest Hills, dans le Queens, à New York. Il est constitué du guitariste et auteur-compositeur-interprète Paul Simon et du chanteur Arthur Garfunkel. Tous deux se rencontrent pour la première fois dans le Queens en 1953. Ils apprennent à s'accorder l'un avec l'autre et commencent à écrire leurs propres compositions. Ils connaissent leur premier succès en 1957, sous le nom de Tom and Jerry, avec la chanson Hey Schoolgirl, qui imite le style de leurs idoles The Everly Brothers. Mais ce succès n'est pas confirmé et ils poursuivent ensuite leurs études universitaires, chacun de son côté. Ils se retrouvent en 1963, avec un intérêt accru pour la musique folk, et signent un contrat avec Columbia Records. Leur premier album, Wednesday Morning, 3 A.M. (1964), est un échec commercial à sa sortie et le duo se sépare, Simon décidant de poursuivre sa carrière en solo en Angleterre.Cependant, une nouvelle version de leur chanson The Sound of Silence connaît le succès sur les ondes américaines en 1965 et atteint la première place du Billboard Hot 100. Le duo se reforme alors et enregistre un deuxième album, Sounds of Silence (1966), qui est rapidement suivi par Parsley, Sage, Rosemary and Thyme (1966), album sur lequel le duo prend un plus grand contrôle créatif. La popularité du duo s'accroît avec la bande originale du film Le Lauréat (1967), composée en majeure partie par leurs chansons. Leur album suivant, Bookends (1968), les propulse au rang de stars internationales majeures. Néanmoins, les relations entre les deux hommes se dégradent et le duo se sépare peu après la sortie de leur album suivant, Bridge over Troubled Water (1970), qui est leur plus grand succès commercial. Dans une interview télévisée, Simon déclarera qu'il avait composé Bridge Over Troubled Water pour Garfunkel et qu'il ne voyait que lui pour l'interpréter. Lorsque Garfunkel commence les sessions, Simon est émerveillé par son interprétation mais il dira ressentir également un sentiment d'injustice devant cet accaparement : 'et l'auteur ?...'Simon and Garfunkel comptent parmi les artistes les plus populaires des années 1960 et sont considérés comme des icônes de la contre-culture de cette décennie, au même titre que les Beatles et Bob Dylan. Leurs chansons les plus célèbres, The Sound of Silence, I Am a Rock, Homeward Bound, Scarborough Fair/Canticle, A Hazy Shade of Winter, Mrs. Robinson, Bridge over Troubled Water, The Boxer, Cecilia et El Cóndor Pasa (If I Could), ont toutes connu un très grand succès international. Depuis leur séparation, Simon et Garfunkel ont reformé plusieurs fois le duo, notamment à l'occasion d'un concert à Central Park en 1981 qui réunit plus de 500 000 spectateurs, ce qui constitue l'une des plus grandes affluences de tous les temps pour un concert.",
    },
    {
      id: "era",
      name: "Era",
      logo: "/images/hobbies/artistes/eraLogo.png",
      lien: "/hobbies/artistes/era",
      description:
        "Era (stylisé +eRa+) est un projet musical fondé par le musicien français Éric Lévi, ancien membre du groupe rock Shakin' Street. Le troisième album sorti en 2003, The Mass, dans une inspiration proche de Carmina Burana, a connu un grand succès commercial en mélangeant des thèmes de musique originale interprétés par une chorale (chantant en un langage inventé), avec guitare électrique, cordes et synthétiseurs ; musique qu'on pourrait qualifier de new age1,2.L'univers visuel d'Era est le pendant de son inspiration musicale, il utilise des signes et des sentiments proches du religieux et de l'univers médiéval. Il explore une dimension universelle, un univers d'émotions, spirituel et mystique. Les chansons d'Era sont en une langue imaginaire proche du latin médiéval et en diverses autres langues, comme l'anglais ou l'arabe.",
    },
  ];
  const hobbiesSend = artistes;
  hobbiesSend.forEach((element) => {
    if (element.id === hobbiesSelected) {
      response.render("hobbies", { hobbiesSend, affiche, element, afficheDetails });
    }
  });
});

//route hobbies details films
app.get("/hobbies/films/:selected", (request, response) => {
  const routeParameters = request.params;
  const hobbiesSelected = routeParameters.selected;

  const affiche = true;
  const afficheDetails = true;

  const films = [
    {
      id: "captainAmerica",
      name: "Captain America",
      logo: "/images/hobbies/films/CaptainAmericaLogo.png",
      lien: "/hobbies/films/captainAmerica",
      description:
        "Steven « Steve » Rogers, alias Captain America est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Joe Simon et le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Captain America Comics #1, paru en décembre 1940n 3 mais avec la date de mars 1941 inscrite sur la couverture2.Conçu à l'origine comme une figure patriotique américaine en réaction au régime nazi, le personnage devient actif avant même l'entrée en guerre officielle des États-Unis dans la Seconde Guerre mondiale, en décembre 1941. Dès le début de sa publication, il est perçu comme le porte-drapeau des valeurs démocratiques de son pays et comme un défenseur du monde libre contre les totalitarismes, notamment le Troisième Reich3.Doté d'une condition physique au summum du potentiel humain, Captain America est un combattant hors pair, un chef-né et un stratège militaire accompli. Il porte un costume reconnaissable entre tous, inspiré du drapeau américain et est équipé d'un bouclier quasi indestructible, composé d'un alliage d'acier et du fictif vibranium, qu'il utilise comme une protection ainsi que comme une arme.Depuis les années 1960, Captain America fait partie de l'équipe de super-héros les Vengeurs (Avengers, et ses diverses versions) dont il est devenu au fil des ans l’un des piliers.En 2011, Captain America est classé par le site de référence IGN en sixième position du « Top 100 Comic Book Heroes of All Time »4, en 2012 second dans leur classement du « Top 50 Avengers »5 et en 2014 second dans leur classement du « Top 25 best Marvel superheroes »6. Dans l'univers cinématographique Marvel, le personnage de Captain America est interprété par l'acteur Chris Evans à partir du film Captain America : First Avenger (2011) jusqu'à Avengers : Endgame (2019), à la fin duquel il charge le Faucon (interprété par Anthony Mackie) de poursuivre son œuvre, ce dernier se glissant dans ce rôle au terme de la série Falcon et le Soldat de l'Hiver (2021).",
    },
    {
      id: "ironMan",
      name: "Iron Man",
      logo: "/images/hobbies/films/IronManLogo.png",
      lien: "/hobbies/artistes/ironMan",
      description:
        "Iron Man est un film américain réalisé par Jon Favreau, sorti en 2008. Il raconte les origines et les débuts du personnage éponyme issu du comics publié par Marvel. Il s'agit de la première étape de l'univers cinématographique Marvel, dont la première partie, appelée « Phase un » s'est terminée en 2012 avec Avengers de Joss Whedon.Ce film marque aussi le retour au succès au box-office de Robert Downey Jr., qui connait grâce à ce rôle un regain de popularité. Le film récolte effectivement 585 millions de dollars pour un budget de 140 millions et sera suivi en 2010 d'Iron Man 2.",
    },
    {
      id: "spiderMan",
      name: "Spider Man",
      logo: "/images/hobbies/films/SpidermanLogo.png",
      lien: "/hobbies/artistes/spiderMan",
      description:
        "Spider-Man est un film américain réalisé par Sam Raimi, sorti en 2002. C'est l'adaptation cinématographique du comics de Marvel Spider-Man créé par Stan Lee et le dessinateur Steve Ditko. Il a donné lieu à deux suites, Spider-Man 2 en 2004 et Spider-Man 3 en 2007.",
    },
  ];
  const hobbiesSend = films;
  hobbiesSend.forEach((element) => {
    if (element.id === hobbiesSelected) {
      response.render("hobbies", { hobbiesSend, affiche, element, afficheDetails });
    }
  });
});

//route hobbies details livres
app.get("/hobbies/livres/:selected", (request, response) => {
  const routeParameters = request.params;
  const hobbiesSelected = routeParameters.selected;

  const affiche = true;
  const afficheDetails = true;

  const livres = [
    {
      id: "naruto",
      name: "Naruto",
      logo: "/images/hobbies/livres/NarutoLogo.png",
      lien: "/hobbies/livres/naruto",
      description:
        "Naruto (ナルト?) est un shōnen manga écrit et dessiné par Masashi Kishimoto. Naruto a été prépublié dans l'hebdomadaire Weekly Shōnen Jump de l'éditeur Shūeisha entre septembre 1999 et novembre 2014. La série a été compilée en 72 tomes.La version française du manga est publiée par Kana entre mars 2002 et novembre 20161.À la suite de son succès sous forme de manga, une adaptation en anime est réalisée par les studios Pierrot et Aniplex et est diffusée sur TV Tokyo depuis le 3 octobre 2002. Une seconde partie du récit a aussi vu le jour et a été renommée Naruto Shippuden lors de son adaptation. La série animée est diffusée en France depuis le 2 janvier 2006 sur Game One2 ainsi que sur NT1 et sur Cartoon Network depuis la rentrée 2007. En Belgique, elle est diffusée sur Club RTL depuis la rentrée 2008. Game One diffuse aussi depuis le 5 septembre 2008 la seconde série : Naruto Shippuden. Les épisodes sont également proposés en version originale sous-titrée en français en simulcast sur J-One, depuis le 06 Août 2019 sur Netflix et Anime Digital Network.Avec plus de 250 millions de copies éditées, Naruto est l'un des mangas les plus vendus dans le monde3 et l'une des bandes dessinées les plus vendues au monde. En raison de son succès, des récits inédits sont également produits régulièrement sous forme de longs métrages d'animation entre 2004 et 2015.",
    },
    {
      id: "dragonBallZ",
      name: "Dragon ball Z",
      logo: "/images/hobbies/livres/DragonBallZLogo.png",
      lien: "/hobbies/livres/dragonBallZ",
      description:
        "Dragon Ball Z (ドラゴンボールZ(ゼット), Doragon Bōru Zetto?, abréviation commune DBZ) est une série télévisée d'animation japonaise adaptée de la franchise Dragon Ball d'Akira Toriyama et produite par Toei Animation. Cette série fait suite à l’anime Dragon Ball et adapte les vingt-six derniers volumes du manga.La série a été initialement diffusée le 26 avril 1989 sur Fuji Television au Japon avec un nouvel horaire par rapport à la série antérieure[précision nécessaire], en 291 épisodes de 25 minutes, le dernier ayant été diffusé le 31 janvier 19961. Une version remastérisée et remontée en 167 épisodes (159 en VO), intitulée Dragon Ball Z Kai, a été diffusée du 5 avril 2009 au 28 juin 2015. L'œuvre original Dragon Ball Z remporta lui le Prix Kyo en 2003 ainsi que le Prix Jump 4 ans après.Une suite alternative, intitulée Dragon Ball GT, a été diffusée du 7 février 1996 au 19 novembre 1997.Une suite directe au manga (hors Arc Oob), intitulée Dragon Ball Super, a été diffusée du 5 juillet 2015 au 25 mars 2018 sur Fuji TV. Un nouveau long métrage a été annoncé le 9 mai 2021 avec une date de sortie prévue en 20222.",
    },
    {
      id: "onePiece",
      name: "One piece",
      logo: "/images/hobbies/livres/OnePieceLogo.png",
      lien: "/hobbies/livres/onePiece",
      description:
        "One Piece (ワンピース, Wan Pīsu?) est une série de mangas shōnen créée par Eiichirō Oda. Elle est prépubliée depuis le 22 juillet 1997 dans le magazine hebdomadaire Weekly Shōnen Jump, puis regroupée en volumes reliés aux éditions Shūeisha depuis le 24 décembre 1997. 101 tomes sont commercialisés au Japon en décembre 2021. La version française est publiée en volumes reliés depuis le 1er septembre 2000 par Glénat, et 100 volumes sont commercialisés en décembre 2021. Depuis le 26 septembre 2021, la version française est prépubliée simultanément avec la version japonaise sur les plates-formes en ligne Manga Plus et Glénat Manga Max.L'histoire suit les aventures de Monkey D. Luffy, un garçon dont le corps a acquis les propriétés du caoutchouc après avoir mangé par inadvertance un fruit du démon. Avec son équipage de pirates, appelé l'équipage de Chapeau de paille, Luffy explore Grand Line à la recherche du trésor ultime connu sous le nom de « One Piece » afin de devenir le prochain roi des pirates.Les droits de la série sont acquis par la société Toei Animation qui adapte le manga en anime, cette version est diffusée au Japon chaque dimanche depuis 1999. La série compte plus de 1 000 épisodes en novembre 2021. Dans les pays francophones, les droits de l'anime sont possédés par Kana Home Video. Il est disponible sur les plates-formes de streaming Anime Digital Network et Crunchyroll. Il est aussi diffusé sur les chaînes J-One, Game One et MCM. La licence compte 15 films, 11 épisodes spéciaux et 1 OAV, ainsi que 4 romans, 1 livre de recettes, plus de 50 jeux vidéo, plus de 5000 figurines1, un restaurant, un parc d’attraction, et une série live prévue pour 20222.One Piece est le manga le plus vendu au monde3. C'est également la série la plus vendue au monde dessinée par un seul auteur4. Le tirage total des tomes de One Piece s'élève à 490 millions d'exemplaires en juillet 2021, avec 400 millions d'exemplaires au Japon et 90 millions d'exemplaires dans le reste du monde (42 pays). En France, la série est devenue leader en 2011 et s'est vendue à 28,2 millions d'exemplaires depuis sa sortie.",
    },
  ];
  const hobbiesSend = livres;
  hobbiesSend.forEach((element) => {
    if (element.id === hobbiesSelected) {
      response.render("hobbies", { hobbiesSend, affiche, element, afficheDetails });
    }
  });
});

//route hobbies details loisirs
app.get("/hobbies/loisirs/:selected", (request, response) => {
  const routeParameters = request.params;
  const hobbiesSelected = routeParameters.selected;

  const affiche = true;
  const afficheDetails = true;

  const loisirs = [
    {
      id: "cyclisme",
      name: "Cyclisme",
      logo: "/images/hobbies/loisirs/CyclismeLogo.png",
      lien: "/hobbies/loisirs/cyclisme",
      description:
        "Le cyclisme recouvre plusieurs notions concernant la bicyclette : il est d'abord une activité quotidienne pour beaucoup, un loisir pour d'autres (cyclotourisme), enfin un sport proposant des courses selon plusieurs disciplines : l'école de cyclisme, le cyclisme sur route, le cyclisme sur piste, le cyclo-cross, le vélo tout terrain (abrégé couramment VTT), le BMX, le cyclisme en salle et le polo-vélo. Le sport cycliste est réglementé au niveau mondial par l'Union cycliste internationale (UCI).",
    },
    {
      id: "running",
      name: "Running",
      logo: "/images/hobbies/loisirs/RunningLogo.png",
      lien: "/hobbies/loisirs/running",
      description:
        "Le running (terme anglais signifiant « courir ») est une pratique libre de la course à pied, accompagnée d'objectifs propres à ceux d'une discipline. Le running s'inscrit dans le culte de la performance : courir plus longtemps ou plus vite par exemple. Pour les runners qui l'exercent de façon régulière voire intensive, il se différencie du jogging qui reste une activité « du dimanche », occasionnelle, pour éliminer les excès ou prendre l'air1.Le running devient une tendance lourde des sports individuels, avec une croissance régulière du nombre d'adeptes2.Du fait de sa forme plus intense que le jogging, le running a vu l'apparition de beaucoup d'outils et de structures et d'équipements spécialisés qui permettent aux runners de compléter leur progression athlétique : figurent les courses et les rassemblements en tous lieux, les coaches, les académies sportives, les applications dédiées, les chaussures et équipements de running.Le running constitue aussi un marché commercial que ciblent les fournisseurs du sport, séduits par sa nouveauté, son aspect à la mode et son expression comme phénomène social.",
    },
    {
      id: "guitare",
      name: "Guitare",
      logo: "/images/hobbies/loisirs/GuitareLogo.png",
      lien: "/hobbies/loisirs/guitare",
      description:
        "La guitare est un instrument à cordes pincées. Les cordes sont disposées parallèlement à la table d'harmonie et au manche, généralement coupé de frettes, sur lesquelles on appuie les cordes, d'une main, pour produire des notes différentes. L'autre main pince les cordes, soit avec les ongles et le bout des doigts, soit avec un plectre (ou médiator). La guitare a le plus souvent six cordes.La guitare est la version européenne la plus courante de la catégorie organologique des luths en forme de boîte1, cordophones avec caisse et manche distincts et plan des cordes parallèle à la table. Elle se différencie des instruments similaires (balalaïka, bouzouki, charango, luth, mandoline, oud, théorbe, ukulele) principalement par son fond à peu près plat, sa forme en huit, et secondairement par le nombre de cordes et leur accord le plus habituel. Des variantes de guitare sont appelées, régionalement, par des noms particuliers : viola, violão, cavaco et cavaquinho (Brésil) ; tiple et requinto (Amérique latine)…Le corps creux de la guitare, généralement appelé caisse de résonance, transforme la vibration des cordes en ondes sonores. On fabrique plusieurs types de guitare pouvant différer par leur ambitus et leur timbre tout en partageant la plupart de leurs techniques de jeu. Le coffre est le plus souvent en bois mais peut aussi se fabriquer en métal et, plus récemment de matériau composite matière plastique-fibre de carbone. La guitare électrique, dérivée de la guitare acoustique au cours du xxe siècle, peut se dispenser de corps creux, ce qui en fait, en toute rigueur, un instrument nouveau qui inclut un amplificateur électronique et son haut-parleur, avec des possibilités de variations de timbre largement au-delà de la guitare acoustique, dans toutes ses variantesa.La guitare, aisément transportable, est un instrument d'accompagnement du chant dans de nombreux genres musicaux populaires. Souvent le chanteur s'accompagne lui-même sur sa guitare. La musique classique européenne a fourni un répertoire pour guitare ; celle-ci est aussi un instrument caractéristique du flamenco où elle accompagne le chant et la danse. Le choro brésilien, la musique mariachi au Mexique l'intègrent dans des ensembles.Sa popularité, déjà établie aux siècles derniers, s’est accentuée avec la diffusion internationale des musiques américaines au xxe siècle : jazz, blues, country, pop, rock, reggae, soul. La guitare se rencontre dans des interprétations modernes de musiques africaines, latines ou celtiques. Avec le piano, l'harmonica et le violon, c’est un des instruments les plus diffusés au monde.",
    },
  ];
  const hobbiesSend = loisirs;

  hobbiesSend.forEach((element) => {
    if (element.id === hobbiesSelected) {
      response.render("hobbies", { hobbiesSend, affiche, element, afficheDetails });
    }
  });
});

app.get("/description", (request, response) => {
  response.render("description");
});
app.get("/blog", (request, response) => {
  response.render("blog");
});
app.get("/hobbies", (request, response) => {
  response.render("hobbies");
});
app.get("/pokemon", (request, response) => {
  response.render("pokemon");
});

//message connexion
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
