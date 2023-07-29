import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {HarfenAusMeisterhandComponent} from "./components/harfen-aus-meisterhand/harfen-aus-meisterhand.component";
import {AboutFranzComponent} from "./about-franz/about-franz.component";
import {InstrumenteComponent} from "./components/instrumente/instrumente.component";
import {WindharfenComponent} from "./components/windharfen/windharfen.component";
import {GalerieComponent} from "./components/galerie/galerie.component";
import {HarfenlehrerComponent} from "./components/harfenlehrer/harfenlehrer.component";
import {AusstellungenComponent} from "./ausstellungen/ausstellungen.component";
import {SeminareComponent} from "./components/seminare/seminare.component";
import {KontaktComponent} from "./components/kontakt/kontakt.component";
import {ImpressumComponent} from "./components/impressum/impressum.component";
import {TribellaComponent} from "./components/instrumente/details/tribella/tribella.component";
import {LindeComponent} from "./components/instrumente/details/linde/linde.component";
import {
  TroubadourFiguerasComponent
} from "./components/instrumente/details/troubadour-figueras/troubadour-figueras.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'harfen-aus-meisterhand', component: HarfenAusMeisterhandComponent},
  {path: 'franz-reschenhofer', component: AboutFranzComponent},
  {path: 'instrumente', component: InstrumenteComponent},
  {path: 'windharfen', component: WindharfenComponent},
  {path: 'galerie', component: GalerieComponent},
  {path: 'harfenlehrer', component: HarfenlehrerComponent},
  {path: 'ausstellungen', component: AusstellungenComponent},
  {path: 'seminare', component: SeminareComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'instrumente/details/tribella', component: TribellaComponent},
  {path: 'instrumente/details/linde', component: LindeComponent},
  {path: 'instrumente/details/troubadour-figueras', component: TroubadourFiguerasComponent},

  {path:'**',pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
