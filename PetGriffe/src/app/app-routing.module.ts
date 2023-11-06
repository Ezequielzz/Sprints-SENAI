import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './template/header/header.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { FooterComponent } from './template/footer/footer.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
