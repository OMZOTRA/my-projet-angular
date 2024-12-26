export interface Car {
  "id": number,
  "marque": string,
  "modele": string,
  "annee": number,
  "prix_journalier": number,
  "disponible": false,
  "image_url": string,
  "caracteristiques": {
    "type": string,
    "transmission": string,
    "carburant": string,
    "couleur": string
  }
}
