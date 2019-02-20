import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import { Contactservice } from '../../services/contactService';
import { Contct } from '../Model/Contct';

@Component({
  selector: 'app-c',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
Liste2:Contct [];

listec: Contct [];
motcle:string="";
page:number=1;
size:number=5;
  constructor(public contservice:Contactservice) { }

  ngOnInit() {
   this.recherche();
    this.doaffich();
  }
  dosearch(){
    this.contservice.getcontacts(this.motcle,this.size,this.page)
    .subscribe(data=>{this.Liste2=data},err=>{console.log(err)});
  }
   recherche(){
this.dosearch();
  }
  doaffich(){
    this.contservice.allcontact().subscribe(data=>{this.listec=data},err=>{console.log(err)});
  }
  /*onKey(event: any){
    this.dosearch();
  }*/

}
