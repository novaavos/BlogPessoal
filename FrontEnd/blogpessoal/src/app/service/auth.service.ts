
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(

    private http: HttpClient

  ) {
  }

  token = {
    headers: new HttpHeaders().set("authorization", environment.token)
  }

  entrar(UserLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', UserLogin)
  }

  cadastrar(Usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', Usuario)
  }

  atualizar(Usuario: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/atualizar', Usuario)
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`, this.token)
  }

  logado(){
    let ok = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
}
