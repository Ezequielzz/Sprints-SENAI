import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/service/cadastro.service';
import { ValidacaoService } from 'src/app/service/validacao.cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  endereco: string = '';
  cep: string = '';
  telefone: string = '';

  constructor(private router: Router, private cadastroService: CadastroService, private validarService: ValidacaoService) {}

  validarFormulario(dados: any): void {
    const resultadoValidacao = this.validarService.validarCadastro(dados);

    if (!resultadoValidacao.sucesso) {
      alert("erro")
    }
  }
  submitForm() {
console.log("Enviando dados do formulário:");

    const dadosForm = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      endereco: this.endereco, 
      cep: this.cep,
      telefone: this.telefone,
    };

    // Passando os dados do formulário para o serviço
    this.cadastroService.cadastrarUsuario('cadastro', dadosForm).subscribe(
        (response) => {
          console.log('Resposta do serviço:', response);
          this.router.navigate(['/login']);
        },(erro) => {
          console.error('Erro no serviço:', erro);
        }
      );
  }
}