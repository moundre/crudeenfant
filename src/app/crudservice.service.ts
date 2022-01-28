import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
host=environment.myurl;
  constructor(
    public http:HttpClient
  ) { }
  getallchildren(){
    return this.http.get(this.host+'allstudent');
   }
  addchildren(data:any){
    return this.http.post(this.host+'savestudent',data);
  }
  updatechildren(data:any, id:any){
    return this.http.put(this.host+'updatestudent/'+id, data);
  }
  deletechildren(id:any){
    return this.http.delete(this.host+'deletestudent/'+id);
  }
  getonechildren(id:any){
    return this.http.get(this.host+'studentByid'+id);
  }
}
