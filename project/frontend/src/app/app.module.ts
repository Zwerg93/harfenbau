import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { HarfenAusMeisterhandComponent } from './components/harfen-aus-meisterhand/harfen-aus-meisterhand.component';
import { AboutFranzComponent } from './about-franz/about-franz.component';
import { InstrumenteComponent } from './components/instrumente/instrumente.component';
import { WindharfenComponent } from './components/windharfen/windharfen.component';
import { GalerieComponent } from './components/galerie/galerie.component';
import { HarfenlehrerComponent } from './components/harfenlehrer/harfenlehrer.component';
import { AusstellungenComponent } from './ausstellungen/ausstellungen.component';
import { SeminareComponent } from './components/seminare/seminare.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { TribellaComponent } from './components/instrumente/details/tribella/tribella.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import {MatDialogModule} from "@angular/material/dialog";
import { LindeComponent } from './components/instrumente/details/linde/linde.component';
import { TroubadourFiguerasComponent } from './components/instrumente/details/troubadour-figueras/troubadour-figueras.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HarfenAusMeisterhandComponent,
    AboutFranzComponent,
    InstrumenteComponent,
    WindharfenComponent,
    GalerieComponent,
    HarfenlehrerComponent,
    AusstellungenComponent,
    SeminareComponent,
    KontaktComponent,
    ImpressumComponent,
    TribellaComponent,
    LightboxComponent,
    LindeComponent,
    TroubadourFiguerasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
