import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public formLogin!: FormGroup

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nombre: ["", [Validators.required]]
    })
  }
}
