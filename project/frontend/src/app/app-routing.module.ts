import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {HarfenAusMeisterhandComponent} from "./components/harfen-aus-meisterhand/harfen-aus-meisterhand.component";
import {AboutFranzComponent} from "./components/about-franz/about-franz.component";
import {InstrumenteComponent} from "./components/instrumente/instrumente.component";
import {WindharfenComponent} from "./components/windharfen/windharfen.component";
import {GalerieComponent} from "./components/galerie/galerie.component";
import {HarfenlehrerComponent} from "./components/harfenlehrer/harfenlehrer.component";
import {AusstellungenComponent} from "./components/ausstellungen/ausstellungen.component";
import {SeminareComponent} from "./components/seminare/seminare.component";
import {KontaktComponent} from "./components/kontakt/kontakt.component";
import {ImpressumComponent} from "./components/impressum/impressum.component";
import {TribellaComponent} from "./components/instrumente/details/tribella/tribella.component";
import {LindeComponent} from "./components/instrumente/details/linde/linde.component";
import {
  TroubadourFiguerasComponent
} from "./components/instrumente/details/troubadour-figueras/troubadour-figueras.component";
import {AriannaComponent} from "./components/instrumente/details/arianna/arianna.component";
import {GotischeH25SComponent} from "./components/instrumente/details/gotische-h25-s/gotische-h25-s.component";
import {GotischeH30SComponent} from "./components/instrumente/details/gotische-h30-s/gotische-h30-s.component";
import {GotischeH36SComponent} from "./components/instrumente/details/gotische-h36-s/gotische-h36-s.component";
import {MechteldComponent} from "./components/instrumente/details/mechteld/mechteld.component";
import {TaraComponent} from "./components/instrumente/details/tara/tara.component";
import {ThrudComponent} from "./components/instrumente/details/thrud/thrud.component";
import {MerlinComponent} from "./components/instrumente/details/merlin/merlin.component";
import {DobleAragonesComponent} from "./components/instrumente/details/doble-aragones/doble-aragones.component";
import {AngelicaComponent} from "./components/instrumente/details/angelica/angelica.component";
import {AlgebraComponent} from "./components/instrumente/details/algebra/algebra.component";
import {Irisch28Component} from "./components/instrumente/details/irisch28/irisch28.component";
import {KeltischComponent} from "./components/instrumente/details/keltisch/keltisch.component";
import {KanteleComponent} from "./components/instrumente/details/kantele/kantele.component";
import {LyraComponent} from "./components/instrumente/details/lyra/lyra.component";
import {WindharfenComponent2} from "./components/instrumente/details/windharfen/windharfen.component";

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
  {path: 'instrumente/details/arianna', component: AriannaComponent},
  {path: 'instrumente/details/gotisch-25', component: GotischeH25SComponent},
  {path: 'instrumente/details/gotisch-30', component: GotischeH30SComponent},
  {path: 'instrumente/details/gotisch-36', component: GotischeH36SComponent},
  {path: 'instrumente/details/mechteld', component: MechteldComponent},
  {path: 'instrumente/details/Tara', component: TaraComponent},
  {path: 'instrumente/details/Thrud', component: ThrudComponent},
  {path: 'instrumente/details/Merlin', component: MerlinComponent},
  {path: 'instrumente/details/larpa-doble-aragones', component: DobleAragonesComponent},
  {path: 'instrumente/details/angelica', component: AngelicaComponent},
  {path: 'instrumente/details/algebra', component: AlgebraComponent},
  {path: 'instrumente/details/irisch28', component: Irisch28Component},
  {path: 'instrumente/details/keltisch', component: KeltischComponent},
  {path: 'instrumente/details/kantele', component: KanteleComponent},
  {path: 'instrumente/details/lyra', component: LyraComponent},
  {path: 'instrumente/details/windharfen', component: WindharfenComponent2},

  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
