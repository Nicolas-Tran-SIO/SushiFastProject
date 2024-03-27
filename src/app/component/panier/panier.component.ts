import { Component } from '@angular/core';
import { PanierService } from '../../service/panier.service';
import { Ligne } from '../../models/ligne';
import { Box } from '../../models/Box';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class CommandeComponent {
  nouvelleQuantite: number;
  ligne:Ligne[]=[];
 


  constructor(private panierService: PanierService) {
    this.nouvelleQuantite = 1;
  }

  ngOnInit(): void {
    this.ligne = this.panierService.getPanier();
 
  }

  ajouter(box:Box,qte:number){
    this.panierService.addLigne(box,qte)

  }

  enlever(box: Box, qte: number) {
    this.panierService.enleverLigne(box, qte);
 
  }

prixLigne(ligne:Ligne){
return this.panierService.getPrixLigne(ligne)
}

prixTotla(){
  return this.panierService.getPrixTotal()
}

}