// header.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  termoPesquisa: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  realizarPesquisa(): void {
    // Adicione sua lógica de pesquisa aqui
    if (this.termoPesquisa.toLowerCase() === 'gato') {
      this.router.navigate(['/gatos']);
    } else if (this.termoPesquisa.toLowerCase() === 'cachorro') {
      this.router.navigate(['/cachorros']);
    } else if (this.termoPesquisa.toLowerCase() === 'passaros') {
      this.router.navigate(['/passaros']);
    }
  }
}
/*o um ouvinte na input */