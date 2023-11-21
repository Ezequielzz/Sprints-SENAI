import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario: string = '';
  email: string = '';
  senha: string = '';
  endereco: string = '';
  cep: string = '';
  telefone: string = '';

  constructor(private router: Router, private cadastroService: CadastroService) {}

  submitForm() {
    const dadosForm = {
      usuario: this.usuario,
      email: this.email,
      senha: this.senha,
      endereco: this.endereco, // Adicionei o campo de endereço para corresponder ao seu backend
      cep: this.cep,
      telefone: this.telefone,
    };

    // Agora, você deve passar os dados do formulário para o serviço
    this.cadastroService.cadastrarUsuario('cadastro', dadosForm).subscribe(
        (resposta) => {
          console.log('Resposta do serviço:', resposta);
          this.router.navigate(['/login']);
        },(erro) => {
          console.error('Erro no serviço:', erro);
        }
      );
  }
}