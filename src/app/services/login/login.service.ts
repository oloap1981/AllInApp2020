
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
// import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
// import { HttpService } from '../shared/http.service';
import { Login } from '../../models/login/login.namespace';



@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {

    }

    public login(username: string, password: string): Observable<Login.Token> {
        const url = 'http://allinappws.mesys.it/services/token/' + username + '/' + password;
        console.log(url);
        return this.http.get<Login.Token>(url);
    }

    public changePassword(token, pass, newp , rep): Observable<Login.Result>  {
            const op = {
                dipendenti_key : token.token_dipendente_key,
                password : pass,
                password_new: newp,
                password_rep: rep,
                token : token.token_value
            };
            const url = 'http://allinappws.mesys.it/services/change_password';
            return this.http.post<Login.Result>(url, op);
    }

    public changeAvatar(imm, token: Login.Token): Observable<Login.Result> {
        const op = {
            token : token.token_value,
            dipendenti_key : token.token_dipendente_key,
            immagine : imm
        };

        console.log(op);
        const url = 'http://allinappws.mesys.it/services/change_avatar';
        return this.http.post<Login.Result>(url, op);
    }

}
