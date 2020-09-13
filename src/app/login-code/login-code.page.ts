import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login-code',
  templateUrl: './login-code.page.html',
  styleUrls: ['./login-code.page.scss'],
})
export class LoginCodePage implements OnInit {
code :number;
checkbox:boolean=false;
dataReturnFromService:any="";
nb_phone;


emp={code:125,RemembreMe:true,phone:"16"}
  constructor(private router:Router ,public httpservice:HttpService,public get_route:ActivatedRoute) { 

this.nb_phone=this.get_route.snapshot.paramMap.get('nb_phone');

  }
  ngOnInit() {
    
  }
 
  envoyer(){
    this.emp.code=this.code;
    this.emp.RemembreMe=this.checkbox;
    this.emp.phone=this.nb_phone;
    this.httpservice.login_code("api/authenticate/with/phone",this.emp)
    console.log(this.checkbox)
    
  }


}
