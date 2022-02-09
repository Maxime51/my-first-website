import express from "express";
import nunjucks from "nunjucks";
import { listeOfArticles } from "./listOfArticles";
import { artistes } from "./listOfArtistes";
import { films } from "./listOfFilms";
import { livres } from "./listOfLivres";
import { loisirs } from "./listOfLoisirs";
import { listOfHobbies } from "./listOfHobbies";

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

  response.render("blog", {
    articleTitleSelected,
    articleNameSelected,
    articleDescriptionSelected,
    affiche,
    listeOfArticles,
  });
});

//route hobbies

app.get("/hobbies/:selected", (request, response) => {
  const routeParameters = request.params;
  const hobbiesSelected = routeParameters.selected;
  let hobbiesSend = [{}];
  const affiche = true;
  if (hobbiesSelected === "artistes") {
    hobbiesSend = artistes;
  } else if (hobbiesSelected === "films") {
    hobbiesSend = films;
  } else if (hobbiesSelected === "livres") {
    hobbiesSend = livres;
  } else if (hobbiesSelected === "loisirs") {
    hobbiesSend = loisirs;
  }

  response.render("hobbies", { hobbiesSend, affiche, listOfHobbies });
});

//route hobbies details artistes
app.get("/hobbies/artistes/:selected", (request, response) => {
  const routeParameters = request.params;
  const hobbiesSelected = routeParameters.selected;

  const affiche = true;
  const afficheDetails = true;

  const hobbiesSend = artistes;
  hobbiesSend.forEach((element) => {
    if (element.id === hobbiesSelected) {
      response.render("hobbies", { hobbiesSend, affiche, element, afficheDetails, listOfHobbies });
    }
  });
});

//route hobbies details films
app.get("/hobbies/films/:selected", (request, response) => {
  const routeParameters = request.params;
  const hobbiesSelected = routeParameters.selected;

  const affiche = true;
  const afficheDetails = true;

  const hobbiesSend = films;
  hobbiesSend.forEach((element) => {
    if (element.id === hobbiesSelected) {
      response.render("hobbies", { hobbiesSend, affiche, element, afficheDetails, listOfHobbies });
    }
  });
});

//route hobbies details livres
app.get("/hobbies/livres/:selected", (request, response) => {
  const routeParameters = request.params;
  const hobbiesSelected = routeParameters.selected;

  const affiche = true;
  const afficheDetails = true;

  const hobbiesSend = livres;
  hobbiesSend.forEach((element) => {
    if (element.id === hobbiesSelected) {
      response.render("hobbies", { hobbiesSend, affiche, element, afficheDetails, listOfHobbies });
    }
  });
});

//route hobbies details loisirs
app.get("/hobbies/loisirs/:selected", (request, response) => {
  const routeParameters = request.params;
  const hobbiesSelected = routeParameters.selected;

  const affiche = true;
  const afficheDetails = true;

  const hobbiesSend = loisirs;

  hobbiesSend.forEach((element) => {
    if (element.id === hobbiesSelected) {
      response.render("hobbies", { hobbiesSend, affiche, element, afficheDetails, listOfHobbies });
    }
  });
});

app.get("/description", (request, response) => {
  response.render("description");
});
app.get("/blog", (request, response) => {
  response.render("blog", { listeOfArticles });
});
app.get("/hobbies", (request, response) => {
  response.render("hobbies", { listOfHobbies });
});
app.get("/pokemon", (request, response) => {
  response.render("pokemon");
});

//message connexion
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
