import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CadastroService {
  //adicionei o prefixo api aqui na url base
  private baseUrl: string = 'http://localhost:3000/api'; // Atualize com o seu endpoint

  constructor(private http: HttpClient) {}

  //recebendo parametros
  cadastrarUsuario(rota: string, dadosForm: { usuario: string; email: string;senha: string; endereco: string; cep: string; telefone: string; }): Observable<any> {

    const url = `${this.baseUrl}/${rota}`;
    console.log('URL da requisição:', url); //Linha para verificar a URL
    return this.http.post(url, dadosForm);
  }
}