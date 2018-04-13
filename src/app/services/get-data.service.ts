import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class GetDataService {

  constructor(public myHttp: Http) { }

  getAllClups() {
    return this.myHttp.get("/api/db/getAllClups");
  }

  getClupDetails(id){
    console.log(id);
    return this.myHttp.post('/api/db/getClupMembers',{"id":id});
  }

  addMember(clup_id,name,address,age,type){
    return this.myHttp.post("/api/db/addMember",{"id":clup_id,"name":name,"address":address,"age":age,"type":type});
  }
  
  addClup(name,address){
    return this.myHttp.post('/api/db/addClup',{"name":name,"address":address});
  }

  deleteMember(name:String){
    return this.myHttp.post('/api/db/deleteMember',{"name":name});
  }
}
