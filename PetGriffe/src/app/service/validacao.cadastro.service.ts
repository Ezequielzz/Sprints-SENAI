import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ValidacaoService {
    validarCadastro(dados: any): { sucesso: boolean; mensagem?: string } {

        //validações
        const { nome, email, senha, endereco, cep, telefone } = dados;

        if (nome.value == '' || typeof nome !== 'string' || /\d/.test(nome)) {
            return { sucesso: false, mensagem: "Preencha o campo 'Nome' corretamente, use apenas letras" };
        }
        return { sucesso: true }
    }
}
