import { Component, OnInit } from '@angular/core';
import { MyContacts } from 'src/mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contactmanager',
  templateUrl: './contactmanager.component.html',
  styleUrls: ['./contactmanager.component.css']
})
export class ContactmanagerComponent  implements OnInit{

  allcontacts:MyContacts[]=[]
  heading='Contact Manager'

  serachkey:string=""
  constructor(private api:ApiService){ }

  ngOnInit(): void {
    this.getallcontact()
    }
    //get all contact
    getallcontact(){
      this.api.getallcontacts().subscribe((data:any)=>{
        console.log(data);
        this.allcontacts =data
        
      })
    }
    //search call
    search(event:any){
      console.log(event.target.value);
      this.serachkey=event.target.value
    

    }
    deleteContact(contactId:any){
      this.api.deleteContact(contactId).subscribe((data:any)=>{
        this.getallcontact()

      })
      
      
    }

      
    }
    
  


