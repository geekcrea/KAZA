// Repository.js
import data from '../data/data.json';

export default class AppartementRepository {
  constructor() {
      this.data = data;
  }

   // Méthode pour obtenir toutes les données
  getAll() {
    return this.data;
  }
}