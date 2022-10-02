import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  regFrom = new FormGroup({
    uname: new FormControl(",[]"),
    upass: new FormControl("",[])
  })
get uname(){
  return this.regFrom.get('uname');
}
get upass(){
  return this.regFrom.get('uname');
}
onBotton(){
  console.log(this.regFrom.value)
}
}
