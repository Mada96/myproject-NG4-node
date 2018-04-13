import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-view-clup',
  templateUrl: './view-clup.component.html',
  styleUrls: ['./view-clup.component.css']
})
export class ViewClupComponent implements OnInit {

  public clupsArray: any = [];
  public clupDetails;
  constructor(public myservices: GetDataService, public myroute: Router) { }

  ngOnInit() {
    this.myservices.getAllClups().subscribe((response) => {
      console.log(response);
      this.clupsArray = response.json().clups;
    })
  }

  viewClupDetails(id: String) {
    this.myroute.navigate(["clupDetails/", id]);

  }
}