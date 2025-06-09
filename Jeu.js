import { Plateau } from "./Plateau.js";

export class Jeu {
  constructor() {
    this.plateau = new Plateau();
  }

  affichePlateau() {
    console.log("--- ETATS ---");
    this.plateau.getEtats().forEach(e => console.log(e.versChaine()));

    console.log("\n--- VILLES ---");
    this.plateau.getVilles().forEach(v => console.log(v.versChaine()));

    console.log("\n--- ROUTES ---");
    this.plateau.getRoutes().forEach(r => console.log(r.versChaine()));
  }
}

// Point d'entrée simulé
const jeu = new Jeu();
jeu.affichePlateau();