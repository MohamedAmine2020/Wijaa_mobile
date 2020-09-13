import {HttpClient, HttpHeaders } from  '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient,public router:Router) { }
Savedata(serviceName: String){
  var url =environment.apiURL+serviceName;
  return this.http.put(url,
    { headers:new HttpHeaders({'Content-Type': 'application/json'})});
}
login_code(serviceName: String,code:any){
  
  var url =environment.apiURL+serviceName;
  return this.http.post(url,JSON.stringify(code),
    { headers:new HttpHeaders({'Content-Type': 'application/json'})})
    
    .subscribe(res => {
      console.log(res);

      this.router.navigate(['home']);

    }, (err) => {
      console.log("err");
    });

}
}
