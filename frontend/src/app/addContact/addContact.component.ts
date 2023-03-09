import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addContact',
  templateUrl: './addContact.component.html',
  styleUrls: ['./addContact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const routeId=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(routeId);
  }

}
