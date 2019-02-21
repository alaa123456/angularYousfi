import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Contct } from "../Components/Model/Contct";


@Injectable()
export class Contactservice {


constructor( public http:Http){}

getcontacts(motcle:string,size:number,page:number){
return this.http.get("http://localhost:8080/cherchercontacts?mc="+motcle+"&size="+size+"&page="+page).map(resp=>resp.json());
}
allcontact(){
    return this.http.get("http://localhost:8080/contacts").map(resp=>resp.json());
}
savecontacts(contact:Contct){
    return this.http.post("http://localhost:8080/contacts",contact)
    .map(resp=>resp.json());
    }
}