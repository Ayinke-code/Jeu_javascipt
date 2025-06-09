export class Route {
    constructor(couleur, ville1, ville2) {
      this.couleur = couleur;
      this.ville1 = ville1;
      this.ville2 = ville2;
      this.nom = ville1.getNom() + "-" + ville2.getNom();
    }
  
    getNom() {
      return this.nom;
    }
  }