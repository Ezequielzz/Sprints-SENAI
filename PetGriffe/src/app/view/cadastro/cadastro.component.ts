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
  confirmarSenha: string = '';
  cep: string = '';
  telefone: string = '';

  constructor(private router: Router, private cadastroService: CadastroService) {}

  submitForm() {
    const dadosForm = {
      usuario: this.usuario,
      email: this.email,
      senha: this.senha,
      confirmarSenha: this.confirmarSenha,
      cep: this.cep,
      telefone: this.telefone,
    };

    this.cadastroService.cadastrarUsuario('/cadastro')
      .subscribe(
        (resposta) => {
          // Lógica para lidar com a resposta do serviço, se necessário
          console.log('Resposta do serviço:', resposta);

          // Após o processamento bem-sucedido, navegue para a rota desejada
          this.router.navigate(['/cadastro']);
        },
        (erro) => {
          // Lógica para lidar com erros do serviço, se necessário
          console.error('Erro no serviço:', erro);
        }
      );
  }
}
