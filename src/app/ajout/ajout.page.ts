import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage implements OnInit {

  constructor(
    private serv:CrudserviceService,
    private route:Router
  ) { }

  ngOnInit() {
  }
  onSubmit(enfant:NgForm){
    this.serv.addchildren(enfant.value).subscribe(data=>{
      console.log("Nouveau enfant",data);
      this.route.navigateByUrl('/accueil');
    })
  }
}
