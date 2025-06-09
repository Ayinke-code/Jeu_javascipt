export class Route {
  constructor(ville1, ville2, couleur) {
    this.ville1 = ville1; // Instance de Ville
    this.ville2 = ville2; // Instance de Ville
    this.couleur = couleur;
  }

  getVille1() {
    return this.ville1;
  }

  getVille2() {
    return this.ville2;
  }

  getCouleur() {
    return this.couleur;
  }

  getNom() {
    return `${this.ville1.getNom()} - ${this.ville2.getNom()}`;
  }

  getLongueur() {
    const dx = this.ville1.getX() - this.ville2.getX();
    const dy = this.ville1.getY() - this.ville2.getY();
    const distance = Math.sqrt(dx * dx + dy * dy) / 20.0;
    return Math.max(1, Math.min(6, Math.round(distance)));
  }

  getNombrePoints() {
    const table = {
      1: 1,
      2: 2,
      3: 4,
      4: 7,
      5: 10,
      6: 15
    };
    return table[this.getLongueur()] || 0;
  }

  versChaine() {
    return `${this.getNom()} /${this.couleur}-${this.getLongueur()}`;
  }
}