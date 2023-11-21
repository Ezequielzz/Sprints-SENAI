import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'http://localhost:4200/cadastro'; // Atualize com o seu endpoint

  constructor(private http: HttpClient) {}

  cadastrarUsuario(dados: any) {
    return this.http.post(this.apiUrl, dados);
  }
}