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
import { CardsComponent } from './view/cachorros/cards/cards.component';
import { CardsPassarosComponent } from './view/passaros/cards-passaros/cards-passaros.component';
import { CardsGatosComponent } from './view/gatos/cards-gatos/cards-gatos.component';
import { CardHomeComponent } from './view/home/card-home/card-home.component';
import { CarouselComponent } from './view/home/carousel/carousel.component';
import { CategoriasComponent } from './view/home/categorias/categorias.component';
// import {carsl}

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
    LoginComponent,
    CardsComponent,
    CardsPassarosComponent,
    CardsGatosComponent,
    CardHomeComponent,
    CarouselComponent,
    CategoriasComponent,
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