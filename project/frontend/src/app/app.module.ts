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
import { AboutFranzComponent } from './components/about-franz/about-franz.component';
import { InstrumenteComponent } from './components/instrumente/instrumente.component';
import { WindharfenComponent } from './components/windharfen/windharfen.component';
import { GalerieComponent } from './components/galerie/galerie.component';
import { HarfenlehrerComponent } from './components/harfenlehrer/harfenlehrer.component';
import { AusstellungenComponent } from './components/ausstellungen/ausstellungen.component';
import { SeminareComponent } from './components/seminare/seminare.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { TribellaComponent } from './components/instrumente/details/tribella/tribella.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import {MatDialogModule} from "@angular/material/dialog";
import { LindeComponent } from './components/instrumente/details/linde/linde.component';
import { TroubadourFiguerasComponent } from './components/instrumente/details/troubadour-figueras/troubadour-figueras.component';
import { AriannaComponent } from './components/instrumente/details/arianna/arianna.component';
import { GotischeH25SComponent } from './components/instrumente/details/gotische-h25-s/gotische-h25-s.component';
import { GotischeH30SComponent } from './components/instrumente/details/gotische-h30-s/gotische-h30-s.component';
import { GotischeH36SComponent } from './components/instrumente/details/gotische-h36-s/gotische-h36-s.component';
import { MechteldComponent } from './components/instrumente/details/mechteld/mechteld.component';
import { TaraComponent } from './components/instrumente/details/tara/tara.component';
import { ThrudComponent } from './components/instrumente/details/thrud/thrud.component';
import { MerlinComponent } from './components/instrumente/details/merlin/merlin.component';
import { DobleAragonesComponent } from './components/instrumente/details/doble-aragones/doble-aragones.component';
import { AngelicaComponent } from './components/instrumente/details/angelica/angelica.component';
import { AlgebraComponent } from './components/instrumente/details/algebra/algebra.component';
import { Irisch28Component } from './components/instrumente/details/irisch28/irisch28.component';
import { KeltischComponent } from './components/instrumente/details/keltisch/keltisch.component';
import { KanteleComponent } from './components/instrumente/details/kantele/kantele.component';
import { LyraComponent } from './components/instrumente/details/lyra/lyra.component';
import {WindharfenComponent2} from './components/instrumente/details/windharfen/windharfen.component';

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
    AriannaComponent,
    GotischeH25SComponent,
    GotischeH30SComponent,
    GotischeH36SComponent,
    MechteldComponent,
    TaraComponent,
    ThrudComponent,
    MerlinComponent,
    DobleAragonesComponent,
    AngelicaComponent,
    AlgebraComponent,
    Irisch28Component,
    KeltischComponent,
    KanteleComponent,
    LyraComponent,
    WindharfenComponent2,

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
