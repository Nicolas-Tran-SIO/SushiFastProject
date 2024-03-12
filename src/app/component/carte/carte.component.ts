import { Component } from '@angular/core';
import { SushiBoxService } from '../../service/sushi-box.service';
import { Box } from '../../models/Box';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})

export class CarteComponent {
  boxes:Array<Box>
  constructor(private sushiBoxService: SushiBoxService){
    this.getBoxes();
    this.boxes=[]
  }

getBoxes(): void {
  this.sushiBoxService.Box().subscribe((res: any)=>{
    
    this.boxes=res
    console.log(this.boxes);
  })
} 

}
