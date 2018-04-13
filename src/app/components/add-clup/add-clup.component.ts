import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-clup',
  templateUrl: './add-clup.component.html',
  styleUrls: ['./add-clup.component.css']
})
export class AddClupComponent implements OnInit {
  
  constructor(public myService: GetDataService,public myrouter :Router) { 
  }

  ngOnInit() { }

  insertClupinDB(name: String, address: String) {
 
    this.myService.addClup(name, address).subscribe((response) => {
      console.log(response.json());
      this.myrouter.navigate(['ViewClup']);
    });
  }

}
