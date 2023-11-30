import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ValidacaoService {
    validarCadastro(dados: any): { sucesso: boolean; mensagem?: string } {

        //validações
        const { nome, email, senha, endereco, cep, telefone } = dados;

        if (nome == '' || typeof nome !== 'string' || /\d/.test(nome)) {
            return { sucesso: false, mensagem: "Preencha o campo 'Nome' corretamente, use apenas letras!" };
        }

        if (!this.validarEmail(email)) {
            return { sucesso: false, mensagem: "Preencha o campo 'Email' corretamente!" };
        }

        if (!senha || senha.length < 5) {
            return { sucesso: false, mensagem: "Preencha o campo 'Senha', deve conter no mínimo 5 caracteres!" }
          }
          
          if (!endereco) {
            return { sucesso: false, mensagem: "Preencha o campo 'Endereço' corretamente!" }
          }

        if (!this.validarCep(cep)) {
            return { sucesso: false, mensagem: "Preencha o campo 'Cep' corretamente!" }
        }

        if (!this.validarTelefone(telefone)) {
            return { sucesso: false, mensagem: "Preencha o campo 'Telefone' corrtamente!" }
        }

        return { sucesso: true }
    }

    private validarEmail(email: string): boolean {

        //expressão reguar para validar o formato do e-mail
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }

    private validarCep(cep: string): boolean {
        //expressão para validar o ceo

        const regexCep = /^[0-9]{5}-[0-9]{3}$/;
        return regexCep.test(cep);
    }

    private validarTelefone(telefone: string): boolean {

        //expressão para validar telefone
        const regexTelefone = /^[0-9]{2,3}-[0-9]{5}-[0-9]{4}$/;
        return regexTelefone.test(telefone);
    }
}
