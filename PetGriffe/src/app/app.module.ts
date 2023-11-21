import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { GatosComponent } from './view/gatos/gatos.component';
import { CachorrosComponent } from './view/cachorros/cachorros.component';
import { FamiliaGriffeComponent } from './view/familia-griffe/familia-griffe.component';
import { ServicosPetComponent } from './view/servicos-pet/servicos-pet.component';
import { PassarosComponent } from './view/passaros/passaros.component';
import { LoginComponent } from './view/login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    CadastroComponent,
    GatosComponent,
    CachorrosComponent,
    FamiliaGriffeComponent,
    ServicosPetComponent,
    PassarosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
