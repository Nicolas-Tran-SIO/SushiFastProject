import { Component } from '@angular/core';
import { SushiBoxService } from '../../service/sushi-box.service';
import { Box } from '../../models/Box';
import { PanierService } from '../../service/panier.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})

export class CarteComponent {
  boxes: Array<Box>
  detailBox: Box | null
  environement:any 

  constructor(private sushiBoxService: SushiBoxService, private panierService:PanierService) {
    this.detailBox = null
    this.getBoxes();
    this.boxes = []
    this.environement=environment
  }

  getBoxes(): void {
    this.sushiBoxService.Box().subscribe((res: any) => {

      this.boxes = res
      console.log(this.boxes);
    })
  }
  onDetails(laBox: Box) {
    this.detailBox = laBox
    console.log(this.detailBox)
  }
  
ajouter(box:Box){
  this.panierService.addLigne(box,1)
}

}
