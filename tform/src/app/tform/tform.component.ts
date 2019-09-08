import { Component, OnInit } from '@angular/core';
import{registraion} from 'src/assets/registrationform';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {
  submitted=false;
  registraion = new registraion();
  constructor() { }

  
  ngOnInit() {
  }
  onSubmit(){
this.submitted=true;
  }

}
