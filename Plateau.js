import { Etat } from "./Etat.js";
import { Ville } from "./Ville.js";
import { Route } from "./Route.js";
import { Donnees } from "./Donnees.js";

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
    this.etats = Donnees.ETATS.map(e => new Etat(e[0], e[1]));
  }

  initialiseVilles() {
    this.villes = Donnees.VILLES.map(v => new Ville(v[0], v[1], v[2]));
  }

  initialiseRoutes() {
    this.routes = Donnees.ROUTES.map(r => {
      const ville1 = this.rechercheVille(r[0]);
      const ville2 = this.rechercheVille(r[1]);
      return new Route(ville1, ville2, r[2]);
    });
  }

  rechercheVille(nom) {
    return this.villes.find(v => v.getNom() === nom);
  }

  rechercheRoute(nom) {
    return this.routes.find(r => r.getNom() === nom);
  }

  getEtats() {
    return this.etats;
  }

  getVilles() {
    return this.villes;
  }

  getRoutes() {
    return this.routes;
  }
}