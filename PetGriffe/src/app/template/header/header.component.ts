import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isMenuOpen: boolean = false; // Variável para rastrear o estado do menu

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
