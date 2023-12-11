import {Injectable} from "@angular/core";
import { observeOn } from "rxjs";

@Injectable({
providedIn: 'root'
})

export class validarLoginService{
    validarLogin(dadosLogin: any): {sucesso: boolean; mensagem?: string}{
       
        const {email, senha} = dadosLogin;

        //Validando
        if (!this.validarEmailLogin(email)) {
            return {sucesso: false, mensagem: "Preencha com o seu 'Email' de cadstro, certifique-se de que esteja cadastrado para realizar o seu 'Login'.OBS: O campo nao deve estar vazio"}
        }
        if (senha == '' || senha < 5) {
            return {sucesso:false, mensagem: "Senha incorreta ou inexistente."}
        }


        return {sucesso: true};
    }
    private validarEmailLogin(email: string): boolean{
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
        return regex.test(email);//Quer dizer (true)
    }
}
   
//Caso a classe não seja do tipo void, preciso declara o return, caso eu queira omitir ele, eu colocaria 
//export class validarLogin(dadosLogin: any): void {bla bla bla ....}