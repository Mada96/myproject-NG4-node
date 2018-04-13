import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-clup-details',
  templateUrl: './clup-details.component.html',
  styleUrls: ['./clup-details.component.css']
})
export class ClupDetailsComponent implements OnInit {

  public ClupID;
  public member;
  constructor(public myActivatedRoute: ActivatedRoute, public myservice: GetDataService) {
    this.myservice.getClupDetails(this.myActivatedRoute.snapshot.params.id)
      .subscribe((response) => {
        response=response.json();
        console.log(response);
        this.ClupID = response;
        console.log(this.ClupID);
      }
      )
  }
  DeleteMember(name:String)
  {
    this.myservice.deleteMember(name).subscribe();
  }

  ngOnInit() {
  }

}
