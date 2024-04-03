import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CarteComponent } from './component/carte/carte.component';
import { BoxFormComponent } from './component/box-form/box-form.component';
import { BoxListComponent } from './component/box-list/box-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RgpdComponent } from './component/rgpd/rgpd.component';
import { CommandeComponent } from './component/panier/panier.component';
import { ValidationComponent } from './component/validation/validation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarteComponent,
    BoxFormComponent,
    BoxListComponent,
    RgpdComponent,
    CommandeComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
