import { Component } from '@angular/core';
import { PanierService } from '../../service/panier.service';
import { Ligne } from '../../models/ligne';

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

  addLigne() {
/*     const nouvelleLigne = new Ligne(this.nouvelleQuantite);
    this.panierService.addLigne(nouvelleLigne);
    this.nouvelleQuantite = 1; */
  }

}