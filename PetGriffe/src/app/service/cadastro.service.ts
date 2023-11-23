import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CadastroService {
  private baseUrl: string = 'http://localhost:3000'; // Atualize com o seu endpoint

  constructor(private http: HttpClient) {}

  cadastrarUsuario(rota: string, dadosForm: { usuario: string; email: string;senha: string; endereco: string; cep: string; telefone: string; }): Observable<any> {

    const url = `${this.baseUrl}/api/${rota}`;
    return this.http.post(url, dadosForm);
  }
}