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

  supprimerDuPanier(index: number) {
    this.ligne.splice(index, 1);
    localStorage.setItem("panier",JSON.stringify(this.ligne))
  }
}
