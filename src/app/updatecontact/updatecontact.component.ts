import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContacts } from 'src/mycontact';
import { Mygroup } from 'src/mygroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.css']
})
export class UpdatecontactComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute,private api:ApiService,private router:Router) { }
   contactid:string=''
   contact:MyContacts={} as MyContacts
   groups:Mygroup[]=[] as Mygroup[]
  ngOnInit(): void {
    //get contact id from url parameter using activatedRouter class
    this.activateRoute.params.subscribe((data)=>{
      console.log(data['contactID']);
      this.contactid=data['contactID']
    })
    // call api for geting a particular contact details
    this.api.viewcontact(this.contactid).subscribe((data:any)=>{
      this.contact=data
      console.log(this.contact);
    })
    // call api for getting all groups from services class 
    this.api.getallgroups().subscribe((data:any)=>{
      this.groups=data
      console.log(this.groups);
      

    })
  }
  // updatacontact
  updatecontact(){
    //api call for updating existing contact,args:updated contact,contact id
    this.api.updatecontact(this.contactid,this.contact).subscribe((data:any)=>{
      this.router.navigateByUrl('')

    })
  }

}
 