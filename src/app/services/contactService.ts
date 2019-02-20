import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


@Injectable()
export class Contactservice {


constructor( public http:Http){}

getcontacts(motcle:string,size:number,page:number){
return this.http.get("http://localhost:8080/cherchercontacts?mc="+motcle+"&size="+size+"&page="+page).map(resp=>resp.json());
}
allcontact(){
    return this.http.get("http://localhost:8080/contacts").map(resp=>resp.json());
}
}