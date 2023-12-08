import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AutenticacaoService{
    private baseUrl: string = 'http://localhost:3000/api';

    constructor(private http: HttpClient){}

    realizarLogin(dadosForm: {email: string; senha: string; }): Observable<any>{
        const url = `${this.baseUrl}/login`;
        console.log(`URL da requisição para login ${url}`);
        return this.http.post(url, dadosForm);
    }
}