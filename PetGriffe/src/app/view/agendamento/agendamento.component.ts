import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValidacaoService } from 'src/app/service/validacao.cadastro.service';

@Component({
  selector: 'app-servicos-pet',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent {
  email: string = "";
  telefone: string = "";
  validacaoMensagem: string = "";

  constructor(private validarAgendamento: ValidacaoService, private router: Router){}

validarFormulario(dados: any): void{
  const resultadoValidacao = this.validarAgendamento.validarCadastro(dados);

  if (!resultadoValidacao.sucesso) {
this.validacaoMensagem = resultadoValidacao.mensagem || 'Erro ao agendar';
  }else{
    this.validacaoMensagem = "";
  }

}// 
// const dadosAgendamento = {
//   email = this.email;
//   this.telefone = this.telefone;
//   }
}
