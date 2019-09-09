import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }

  obtenerUsuarios() {

    let params = new HttpParams().append('page','1');
    params = params.append('Nombre','Omar Aceves');
    
    /* const headers = new HttpHeaders({
      'token-usuario' : 'ASQ12312EA"SAWSDF123q23weaee123123'
    }); */

    return this.http.get('https://reqres123.in/api/user',{ /* headers, */ params })
        .pipe( map ( (resp: any) => resp['data']
          // {return resp['data'];}
        )//, catchError( /* err => */ this.manejarError
          // {console.log('Sucesdio un Error');
          // console.log('Registrado en el log file');
          // console.warn(err);
          // return throwError('Error personalizado');})
        );
  }

  /* manejarError ( error: HttpErrorResponse ) {
    console.log('Sucesdio un Error');
    console.log('Registrado en el log file');
    console.warn(error);
    return throwError('Error personalizado');
  } */
}
