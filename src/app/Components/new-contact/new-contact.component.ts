import { Component, OnInit } from '@angular/core';
import { Contct } from '../Model/Contct';
import { Contactservice } from '../../services/contactService';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
contact:Contct=new Contct();

  constructor(public constservice:Contactservice) { }

  ngOnInit() {
  }

  savecontact(){
    this.constservice.savecontacts(this.contact).subscribe(data=>{console.log(data)},err=>console.log(err));
  }
  
}
