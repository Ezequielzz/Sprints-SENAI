import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './template/header/header.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { FooterComponent } from './template/footer/footer.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { LoginComponent } from './view/login/login.component';
import { PassarosComponent } from './view/passaros/passaros.component';
import { CachorrosComponent } from './view/cachorros/cachorros.component';
import { GatosComponent } from './view/gatos/gatos.component';
import { ServicosPetComponent } from './view/servicos-pet/servicos-pet.component';
import { FamiliaGriffeComponent } from './view/familia-griffe/familia-griffe.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cachorros', component: CachorrosComponent},
  {path: 'gatos', component: GatosComponent},
  {path: 'servicos-pet', component: ServicosPetComponent},
  {path: 'familia-griffe', component: FamiliaGriffeComponent},
  {path: 'passaros', component: PassarosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
