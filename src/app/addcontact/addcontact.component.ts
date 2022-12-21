import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  allgroups:any[]=[]
  contactName:any
  constructor(private api:ApiService){ }

  ngOnInit(): void {
    this.api.getallgroups().subscribe((data:any)=>{
      console.log(data);
      this.allgroups=data
      
    })
  }
  addcontact(){
    
  }

}
