import { Donnees } from "./Donnees.js";
import { Etat } from "./Etat.js";
import { Ville } from "./Ville.js";
import { Route } from "./Route.js";

export class Plateau {
  constructor() {
    this.etats = [];
    this.villes = [];
    this.routes = [];
    this.initialiseEtats();
    this.initialiseVilles();
    this.initialiseRoutes();
  }

  initialiseEtats() {
    this.etats = Donnees.ETATS.map(data => new Etat(data[0], data[1]));
  }

  initialiseVilles() {
    this.villes = Donnees.VILLES.map(data => new Ville(data[0], data[1]));
  }

  initialiseRoutes() {
    this.routes = Donnees.ROUTES.map(data => {
      const v1 = this.rechercheVille(data[0]);
      const v2 = this.rechercheVille(data[1]);
      return new Route(data[2], v1, v2);
    });
  }

  rechercheVille(nom) {
    return this.villes.find(v => v.getNom() === nom);
  }

  rechercheRoute(nom) {
    return this.routes.find(r => r.getNom() === nom);
  }
}

// Exemple d'utilisation
const plateau = new Plateau();
console.log("Villes:", plateau.villes);
console.log("Routes:", plateau.routes);
