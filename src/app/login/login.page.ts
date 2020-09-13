import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from '../services/http.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nb_phone: String;
  newItem: String;
  dataReturnFromService:any="";
  constructor(private router:Router ,public httpservice:HttpService) { }

  ngOnInit() {
  }

  envoyer(){
    console.log("fghj")
    this.httpservice.Savedata("api/send-code/"+this.nb_phone).subscribe((dataReturnFromService)=>{
  this.dataReturnFromService= JSON.stringify
  (dataReturnFromService)
    });
    console.log(this.nb_phone)
    this.router.navigate(['login-code/'+this.nb_phone]);   
  }


}
