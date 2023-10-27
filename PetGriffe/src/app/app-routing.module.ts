import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';

const routes: Routes = [
  {path: 'header', component:HeaderComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'barra-pesquisa', component:BarraPesquisaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
