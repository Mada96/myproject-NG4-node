import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  public clupsArray: any = [];

  constructor(public myservice: GetDataService, public myactiverouter: ActivatedRoute) { }
  public clup_id = this.myactiverouter.snapshot.params.id;
  ngOnInit() {
    this.myservice.getAllClups().subscribe((response) => {
      console.log(response);
      this.clupsArray = response.json().clups;
    })
  }
  
  SaveMember(name: String, address: String, age: Number,type: String) {
    var s =(document.getElementsByTagName("select") as HTMLSelectElement)[0];
    var selected = s.options[s.selectedIndex].value;
    console.log(selected);
    console.log(s);
    this.myservice
      .addMember(selected, name, address, age,type)
      .subscribe((response) => {
      });
    
  }
  
}
