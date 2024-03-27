import { Injectable } from '@angular/core';
import { Ligne } from '../models/ligne';
import { Box } from '../models/Box';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  ligne: Array<Ligne>;

  constructor() { 
    this.ligne =JSON.parse(localStorage.getItem("panier" )?? "[]")
  }

  getPanier() {
    return this.ligne
  }

  addLigne(uneBox:Box, qte:number) {
    let nouvelleLigne=new Ligne(qte,uneBox)
    let ligneExiste = false;
    for (let boxe of this.ligne){
      if (boxe.box.id == uneBox.id){
        boxe.quantite+=qte
        ligneExiste = true
      }
    }
    if (ligneExiste == false){
    this.ligne.push(nouvelleLigne);
  }
    localStorage.setItem("panier",JSON.stringify(this.ligne))
  }

  enleverLigne(uneBox: Box, qte: number) {
    for (let boxe of this.ligne) {
      if (boxe.box.id == uneBox.id) {
        if (boxe.quantite > 1) {
          boxe.quantite -= qte;
          localStorage.setItem("panier", JSON.stringify(this.ligne));
          return;
        } else {
          this.supprimerDuPanier(this.ligne.indexOf(boxe));
          return;
        }
      }
    }
  }

  getPrixLigne(ligne:Ligne):string{
    let lignePanier=this.ligne.find((uneLigne)=>uneLigne.box.id==ligne.box.id)!
    let prix = Number(lignePanier.box.prix)
    let resultat = prix * lignePanier.quantite
    return resultat.toFixed(2)
  }

  getPrixTotal(): string {
    let prixTotal = 0;
    for (let ligne of this.ligne) {
      prixTotal += parseFloat(ligne.box.prix.toString()) * ligne.quantite;
    }
    return prixTotal.toFixed(2);
  }
   
  supprimerDuPanier(index: number) {
    this.ligne.splice(index, 1);
    localStorage.setItem("panier",JSON.stringify(this.ligne))
  }
}
