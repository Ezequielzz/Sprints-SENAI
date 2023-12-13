import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/service/autenticacao.login.service';
import { validarLoginService } from 'src/app/service/validacao.login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email: string = '';
senha: string = '';
mensagemValidacaoLogin: string = '';

constructor(private router: Router, private autentService: AutenticacaoService, private validarLogin: validarLoginService){}

validarLoginForm(dados: any): void{
const resultadoValidacao = this.validarLogin.validarLogin(dados);

//Verificando se foi ou não validado

if (!resultadoValidacao.sucesso){
  this.mensagemValidacaoLogin = resultadoValidacao.mensagem || "Erro ao validar seus dados";
  console.log("Erro ao validar seus dados")
}else{
  this.mensagemValidacaoLogin = "";
  console.log("Dados login validados com sucesso!");
}

}

submitForm(){

  const dadosForm = {
    email: this.email,
    senha: this.senha
  };

    //Validando antes de enviar
    this.validarLoginForm(dadosForm);

    //Se houver erros impede o envio
    if (this.mensagemValidacaoLogin) {
      return;//impede o envio dos dados
    }

  this.autentService.realizarLogin(dadosForm).subscribe(
    (response) => {
      console.log("Recebendo os dados", response);
      console.log('Login bem sucedido', response);

      //redirecinando após o login
      this.router.navigate(['/']);

      if (document.readyState === 'complete') {
        console.log('Página carregada com sucesso(login realizado).')
        window.alert(`Login realizado como ${this.email}`);
      }
      
    },
    (error) => {
      console.error("Hove um erro ao realizar o login:", error);
      alert("Oops, tente novamente mais tarde, estamos em manutenção!")
    }
  )
}
}
