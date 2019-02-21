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
  pagecont:any;
Liste2:Contct [];

listec: Contct [];
motcle:string="";
currentpage:number=2;
size:number=3;
pages:Array<number>;
  constructor(public contservice:Contactservice) { }

  ngOnInit() {
   this.recherche();
   // this.doaffich();
  }
  dosearch(){
    this.contservice.getcontacts(this.motcle,this.size,this.currentpage)
    .subscribe(data=>{
      this.pagecont=data;
      this.pages=new Array(data.totalPages)
    },err=>{console.log(err)});
  }
   recherche(){
this.dosearch();
  }
  gotopage(i:number){
    this.currentpage=i;
    this.dosearch();
  }
 // doaffich(){
  //  this.contservice.allcontact().subscribe(data=>{this.listec=data},err=>{console.log(err)});
 // }
  /*onKey(event: any){
    this.dosearch();
  }*/

}
