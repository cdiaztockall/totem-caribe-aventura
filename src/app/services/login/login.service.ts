import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { Observable } from 'rxjs';

import * as moment from 'moment';

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endPoint: string = environment.endPointHttp

  objectOpenLocker: any = {//abrir locker
    "type": 7,
    "data": {
      "user_id": '',
      "locker_name": '',
      "box_name": '',
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJAYXRtIjp0cnVlLCJpc3MiOiJhbmRyZXMuY2FycmlsbG8iLCJleHAiOjE2NDk0ODA0MDAsImlhdCI6MTYxODk4MTIwMH0.UwHaA-M4iM3pGZ83R3A7IbrCu3oN3UUQRYMd5jAn9xk"
    }

  }

  credencialesToken: {} = {
    username: "tockall",
    password: "2IHMCCfodRtANbVbxPK9"
  }

  myWebSocket: WebSocketSubject<any>;

  constructor(
    private _http: HttpClient
  ) {
    this.myWebSocket = webSocket<any>(environment.endPointSocket);
  }

  generateToken(): Observable<boolean> {
    return new Observable(observer => {
      let url = `${this.endPoint}/auth/token`
      this._http.post(url, this.credencialesToken).subscribe(
        (data: any) => {
          try {
            let token = data['accessToken']['token']
            localStorage.setItem('token', token)
            observer.next(true)
          } catch (error) {
            observer.error('No se pudo gererar el token') 
          }
        }
      )
    })
  }

  login(data_user: any): Observable<any> {
    let token = localStorage.getItem('token')
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization': `Bearer ${token}`
    })

    return new Observable(observer => {

      let date = moment().format('DD-MM-YYYY');
      
      let params = `?filter=boletas.visitante.numeroIdentificacion:'${data_user.cc}'&sort=fecha,desc&size=50`

      let url = `${this.endPoint}/boleteria/buscarVisitante?filter=numeroIdentificacion:'${data_user.cc}' and codigo:'${data_user.code}' and boleta.reserva.fecha:'${date}'`
      // let url = `${this.endPoint}/boleteria/buscarVisitante?filter=numeroIdentificacion:'${data_user.cc}' and codigo:'${data_user.code}' and boleta.reserva.fecha:'${date}'`
      // let url = `${this.endPoint}/boleteria/buscarVisitante?filter=numeroIdentificacion:'${data.cc}' and codigo:'${data.code}' and boleta.reserva.fecha:'${date}'`
      this._http.get(url, { headers }).subscribe(
        (data: any) => {
          let response: any = {}

          try {

            if(data.length == 0) {
              response = {
                status: false,
                message: 'Usuario no encontrado',
              }
            }

            if(data.length > 0) {
              let firstUser = data[0]
              response = {
                status: true,
                message: 'Usuario encontrado',
                user: {
                  id: firstUser['id'],
                  name: firstUser['nombre'],
                  apellido: firstUser['apellido'],
                  email: firstUser['email'],
                  codigo: firstUser['codigo'],
                  identification: firstUser['numeroIdentificacion'],
                  locker: firstUser['reservaCasilla']['casilla']['casillero']['nombre'],
                  box: firstUser['reservaCasilla']['casilla']['id'],
                  clave: firstUser['reservaCasilla']['casilla']['clave']
                  // locker: firstUser['reservaCasilla']['casilla']['casillero']['nombre'],
                  // box: firstUser['reservaCasilla']['casilla']['id']
                }
              }
            }

            observer.next(response)
            
          } catch (error) {
            console.log(error);
            
            response = {
              status: false,
              message: 'Error interno #65463547'
            }
            observer.next(response)
          }

        },
        error => {
          observer.error('Error externo #958659')
        }
      )

    })

  }

  openLockerHttp(data_user: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
    })
    return new Observable(observer => {

      let url = `${this.endPoint}/lockers/visitanteCodigoAbrirCasillero`
      // let url = `${this.endPoint}/boleteria/buscarVisitante?filter=numeroIdentificacion:'${data.cc}' and codigo:'${data.code}' and boleta.reserva.fecha:'${date}'`
      this._http.post(url, data_user, { headers }).subscribe(
        (data: any) => {
          console.log(data);
          
          let response: any = {}

          try {

            response = {
              status: true,
              message: 'Locker abierto exitosamente.',
            }
            // if(data.data.respuesta.length == 0) {
            // }

            observer.next(response)
            
          } catch (error: any) {
            response = {
              status: false,
              message: error.message
            }
            observer.next(response)
          }

        },
        error => {
          try {
            observer.error(error.error.message)
          } catch (error) {
            observer.error('Error externo #958659') 
          }
        }
      )

    })

  }

  openLocker(): Observable<any> {
    
    this.objectOpenLocker.data.user_id = `andres.carrillo::${(Math.random() * 1000000).toFixed()}`
    this.objectOpenLocker.data.locker_name = JSON.parse(localStorage.getItem('user')!.toString()).locker
    this.objectOpenLocker.data.box_name = JSON.parse(localStorage.getItem('user')!.toString()).box

    this.myWebSocket.next(this.objectOpenLocker)
    
    this.myWebSocket

    return new Observable(observer => {
      this.myWebSocket.asObservable().subscribe(
        (dataFromServer: any) => {
          observer.next(dataFromServer)
          this.myWebSocket.complete()
        },
        (error: any) => observer.error(error)
      );
    })

  }

}
