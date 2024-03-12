import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Box } from '../../models/Box';
@Component({
selector: 'app-box-form',
templateUrl: './box-form.component.html',
styleUrls: ['./box-form.component.css']
})
export class BoxFormComponent {
Box: Box = new Box('','','','','',[],[])
boxForm = new FormGroup({
id: new FormControl(''),
nom: new FormControl(''),
piece: new FormControl(''),
prix: new FormControl(''),
image: new FormControl(undefined),
aliment: new FormControl([]),
saveur: new FormControl([]),
})
}
