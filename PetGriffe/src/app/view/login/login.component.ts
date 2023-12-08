import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/service/autenticacao.login.service';
import { ValidacaoService } from 'src/app/service/validacao.cadastro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email: string = '';
senha: string = '';
mensagemValidacaoLogin: string = '';

constructor(private router: Router, private autentService: AutenticacaoService, private validarLogin: ValidacaoService){}

validarLoginForm(dados: any): void{
const resultadoValidacao = this.validarLogin.validarCadastro(dados);

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
      return;
    }

  this.autentService.realizarLogin(dadosForm).subscribe(
    (response) => {
      console.log("Recebendo os dados", response);
      console.log('Login bem sucedido', response);

      //redirecinando após o login
      this.router.navigate(['/']);
      
    },
    (error) => {
      console.error("Hove um erro ao realizar o login:", error);
      alert("Oops, tente novamente mais tarde!")
    }
  )
}
}
