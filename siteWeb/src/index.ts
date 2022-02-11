import express from "express";
import nunjucks from "nunjucks";
import cookie from "cookie";
import { listeOfArticles } from "./listOfArticles";
import { artistes } from "./listOfArtistes";
import { films } from "./listOfFilms";
import { livres } from "./listOfLivres";
import { loisirs } from "./listOfLoisirs";
import { listOfHobbies } from "./listOfHobbies";

const app = express();
const formParser = express.urlencoded({ extended: true });

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(express.static("public")); //acces au dossier
app.set("view engine", "njk");

//création de route
app.get("/", (request, response) => {
  const cookies = cookie.parse(request.get("cookie") || "");
  let colorSend = "";
  if (cookies.colorModeCookie === undefined) {
    colorSend = "blue";
  } else {
    const color = cookies.colorModeCookie.split(":")[1].split('"');
    colorSend = color[1];
  }
  let colorGreen = "";
  let colorBlue = "";
  let colorRed = "";
  if (colorSend === "green") {
    colorGreen = "green";
  } else if (colorSend === "blue") {
    colorBlue = "blue";
  } else if (colorSend === "red") {
    colorRed = "red";
  }
  response.render("home", { colorGreen, colorBlue, colorRed });
});

//route articles
app.get("/blog/articles/:articleName", (request, response) => {
  const cookies = cookie.parse(request.get("cookie") || "");
  const color = cookies.colorModeCookie.split(":")[1].split('"');
  const colorSend = color[1];
  let colorGreen = "";
  let colorBlue = "";
  let colorRed = "";
  if (colorSend === "green") {
    colorGreen = "green";
  } else if (colorSend === "blue") {
    colorBlue = "blue";
  } else if (colorSend === "red") {
    colorRed = "red";
  }
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
    colorBlue,
    colorGreen,
    colorRed,
  });
});

//route hobbies

app.get("/hobbies/:selected", (request, response) => {
  const cookies = cookie.parse(request.get("cookie") || "");
  const color = cookies.colorModeCookie.split(":")[1].split('"');
  const colorSend = color[1];
  let colorGreen = "";
  let colorBlue = "";
  let colorRed = "";
  if (colorSend === "green") {
    colorGreen = "green";
  } else if (colorSend === "blue") {
    colorBlue = "blue";
  } else if (colorSend === "red") {
    colorRed = "red";
  }
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

  response.render("hobbies", { hobbiesSend, affiche, listOfHobbies, colorBlue, colorGreen, colorRed });
});

//route hobbies details artistes
app.get("/hobbies/artistes/:selected", (request, response) => {
  const cookies = cookie.parse(request.get("cookie") || "");
  const color = cookies.colorModeCookie.split(":")[1].split('"');
  const colorSend = color[1];
  let colorGreen = "";
  let colorBlue = "";
  let colorRed = "";
  if (colorSend === "green") {
    colorGreen = "green";
  } else if (colorSend === "blue") {
    colorBlue = "blue";
  } else if (colorSend === "red") {
    colorRed = "red";
  }
  const routeParameters = request.params;
  const hobbiesSelected = routeParameters.selected;

  const affiche = true;
  const afficheDetails = true;

  const hobbiesSend = artistes;
  hobbiesSend.forEach((element) => {
    if (element.id === hobbiesSelected) {
      response.render("hobbies", {
        hobbiesSend,
        affiche,
        element,
        afficheDetails,
        listOfHobbies,
        colorBlue,
        colorGreen,
        colorRed,
      });
    }
  });
});

//route hobbies details films
app.get("/hobbies/films/:selected", (request, response) => {
  const cookies = cookie.parse(request.get("cookie") || "");
  const color = cookies.colorModeCookie.split(":")[1].split('"');
  const colorSend = color[1];
  let colorGreen = "";
  let colorBlue = "";
  let colorRed = "";
  if (colorSend === "green") {
    colorGreen = "green";
  } else if (colorSend === "blue") {
    colorBlue = "blue";
  } else if (colorSend === "red") {
    colorRed = "red";
  }
  const routeParameters = request.params;
  const hobbiesSelected = routeParameters.selected;

  const affiche = true;
  const afficheDetails = true;

  const hobbiesSend = films;
  hobbiesSend.forEach((element) => {
    if (element.id === hobbiesSelected) {
      response.render("hobbies", {
        hobbiesSend,
        affiche,
        element,
        afficheDetails,
        listOfHobbies,
        colorBlue,
        colorGreen,
        colorRed,
      });
    }
  });
});

//route hobbies details livres
app.get("/hobbies/livres/:selected", (request, response) => {
  const cookies = cookie.parse(request.get("cookie") || "");
  const color = cookies.colorModeCookie.split(":")[1].split('"');
  const colorSend = color[1];
  let colorGreen = "";
  let colorBlue = "";
  let colorRed = "";
  if (colorSend === "green") {
    colorGreen = "green";
  } else if (colorSend === "blue") {
    colorBlue = "blue";
  } else if (colorSend === "red") {
    colorRed = "red";
  }
  const routeParameters = request.params;
  const hobbiesSelected = routeParameters.selected;

  const affiche = true;
  const afficheDetails = true;

  const hobbiesSend = livres;
  hobbiesSend.forEach((element) => {
    if (element.id === hobbiesSelected) {
      response.render("hobbies", {
        hobbiesSend,
        affiche,
        element,
        afficheDetails,
        listOfHobbies,
        colorBlue,
        colorGreen,
        colorRed,
      });
    }
  });
});

//route hobbies details loisirs
app.get("/hobbies/loisirs/:selected", (request, response) => {
  const cookies = cookie.parse(request.get("cookie") || "");
  const color = cookies.colorModeCookie.split(":")[1].split('"');
  const colorSend = color[1];
  let colorGreen = "";
  let colorBlue = "";
  let colorRed = "";
  if (colorSend === "green") {
    colorGreen = "green";
  } else if (colorSend === "blue") {
    colorBlue = "blue";
  } else if (colorSend === "red") {
    colorRed = "red";
  }
  const routeParameters = request.params;
  const hobbiesSelected = routeParameters.selected;

  const affiche = true;
  const afficheDetails = true;

  const hobbiesSend = loisirs;

  hobbiesSend.forEach((element) => {
    if (element.id === hobbiesSelected) {
      response.render("hobbies", {
        hobbiesSend,
        affiche,
        element,
        afficheDetails,
        listOfHobbies,
        colorBlue,
        colorGreen,
        colorRed,
      });
    }
  });
});

app.get("/description", (request, response) => {
  const cookies = cookie.parse(request.get("cookie") || "");

  if (cookies.colorModeCookie !== undefined) {
    const color = cookies.colorModeCookie.split(":")[1].split('"');
    const colorSend = color[1];
    let colorGreen = "";
    let colorBlue = "";
    let colorRed = "";
    if (colorSend === "green") {
      colorGreen = "green";
    } else if (colorSend === "blue") {
      colorBlue = "blue";
    } else if (colorSend === "red") {
      colorRed = "red";
    }
    response.render("description", { colorGreen, colorBlue, colorRed });
  } else {
    response.render("description", { colorBlue: "blue" });
  }
});
app.get("/blog", (request, response) => {
  const cookies = cookie.parse(request.get("cookie") || "");

  if (cookies.colorModeCookie !== undefined) {
    const color = cookies.colorModeCookie.split(":")[1].split('"');
    const colorSend = color[1];
    console.log(colorSend);
    let colorGreen = "";
    let colorBlue = "";
    let colorRed = "";
    if (colorSend === "green") {
      colorGreen = "green";
    } else if (colorSend === "blue") {
      colorBlue = "blue";
    } else if (colorSend === "red") {
      colorRed = "red";
    }
    response.render("blog", { colorGreen, colorBlue, colorRed, listeOfArticles });
  } else {
    response.render("blog", { colorBlue: "blue", listeOfArticles });
  }
});
app.get("/hobbies", (request, response) => {
  const cookies = cookie.parse(request.get("cookie") || "");

  if (cookies.colorModeCookie !== undefined) {
    const color = cookies.colorModeCookie.split(":")[1].split('"');
    const colorSend = color[1];
    let colorGreen = "";
    let colorBlue = "";
    let colorRed = "";
    if (colorSend === "green") {
      colorGreen = "green";
    } else if (colorSend === "blue") {
      colorBlue = "blue";
    } else if (colorSend === "red") {
      colorRed = "red";
    }
    response.render("hobbies", { colorGreen, colorBlue, colorRed, listOfHobbies });
  } else {
    response.render("hobbies", { colorBlue: "blue", listOfHobbies });
  }
});

//change color mode
app.post("/handle-form", formParser, (request, response) => {
  // request.body contains an object with our named fields
  const colorModeCookie = JSON.stringify(request.body);
  response.set(
    "Set-Cookie",
    cookie.serialize("colorModeCookie", colorModeCookie, {
      maxAge: 3600,
    }),
  );
  response.redirect("/");
});

app.get("/options", (request, response) => {
  const cookies = cookie.parse(request.get("cookie") || "");
  let colorSend = "";
  if (cookies[0] === undefined) {
    colorSend = "blue";
  } else {
    const color = cookies.colorModeCookie.split(":")[1].split('"');
    colorSend = color[1];
  }
  let colorGreen = "";
  let colorBlue = "";
  let colorRed = "";
  if (colorSend === "green") {
    colorGreen = "green";
  } else if (colorSend === "blue") {
    colorBlue = "blue";
  } else if (colorSend === "red") {
    colorRed = "red";
  }
  response.render("options", { colorGreen, colorBlue, colorRed });
});

//message connexion
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
