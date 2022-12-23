import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContacts } from 'src/mycontact'
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  allgroups:any[]=[]
  contactName:any
  contact:MyContacts= {} as MyContacts
  constructor(private api:ApiService,private router:Router){ }

  ngOnInit(): void {
    this.api.getallgroups().subscribe((data:any)=>{
      console.log(data);
      this.allgroups=data
      
    })
  }
  addcontact(){
    this.api.addcontact(this.contact)
    .subscribe((data:any)=>{
      //navigate to admin page
      this.router.navigateByUrl('')


    })
    
  }

}
