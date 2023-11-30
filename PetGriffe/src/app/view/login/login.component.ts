import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/service/autenticacao.login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email: string = '';
senha: string = '';

constructor(private router: Router, private autentService: AutenticacaoService){}

realizarLogin(){

  const dadosForm = {email: this.email,senha: this.senha};

  this.autentService.realizarLogin(dadosForm).subscribe(
    (response) => {
      console.log('Login bem sucedido', response);

      //redirecinando após o login
      this.router.navigate(['/']);
      
    },
    (error) => {
      console.error("Hove um erro ao realizar o login:", error);
    }
  )
}
}
