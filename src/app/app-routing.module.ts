import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from './component/carte/carte.component'; 
import { RgpdComponent } from './component/rgpd/rgpd.component';
import { CommandeComponent } from './component/panier/panier.component';


const routes: Routes = [
{path: '', component: CarteComponent},
{path:"rgpd",component: RgpdComponent},
{path:"panier",component: CommandeComponent}

];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }