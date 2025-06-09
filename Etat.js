  export class Etat {
  constructor(nom, contour) {
    this.nom = nom;
    this.contour = contour;
  }

  getNom() {
    return this.nom;
  }

  getContour() {
    return this.contour;
  }

  versChaine() {
    return `${this.nom}: ${this.contour}`;
  }
}
  