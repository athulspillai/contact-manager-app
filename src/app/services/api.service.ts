import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContacts } from 'src/mycontact';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string ='http://localhost:3000/contacts'

  constructor(private http:HttpClient) { }
  // function for get contacts//
  getallcontacts():Observable<MyContacts>{
    return  this.http.get(this.baseUrl)
  }

  //function for view a particular contact
  viewcontact(contactId:string){
    return this.http.get(`${this.baseUrl}/${contactId}`)
  }
  //function for get a particular group
  getGroupName(groupid:string){
   return this.http.get('http://localhost:3000/groups/'+groupid)

  }
  //fuction for fetch all gruops from http://localhost:3000/groups
  getallgroups(){
    return this.http.get('http://localhost:3000/groups')
  }
  //function for adding new contact to server
  addcontact(contactbody:any){
    return this.http.post(this.baseUrl,contactbody)

  }
  // function for delete a particulat contact
  deleteContact(contactId:any){
    return this.http.delete(`${this.baseUrl}/${contactId}`)

  }
  //function for update contact,according to user select
  updatecontact(contactid:any,contactbody:any){
    return this.http.put(`${this.baseUrl}/${contactid}`,contactbody)
  }

}

