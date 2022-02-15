import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-bloedonderzoek',
  templateUrl: './bloedonderzoek.component.html',
  styleUrls: ['./bloedonderzoek.component.scss']
})
export class BloedonderzoekComponent implements OnInit {
    form: FormGroup = this.formBuilder.group({
      bloedonderzoek: ['', [Validators.required, Validators.minLength(3)]],
      eerderOnderzocht: ['', Validators.required],
      eerdereSpecialist: ['', Validators.required],
      contactHuisarts: ['', Validators.required]
  });
  loading = false;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {

  }

  onSubmit() {
    // stop here if form is invalid
    if (this.form.invalid) {
      console.log('invalid');
      return;
    }
  }

  get bloedonderzoek() {
    return this.form.get('bloedonderzoek');
  }

  get eerderOnderzocht() {
    return this.form.get('eerderOnderzocht');
  }

  get eerdereSpecialist() {
    return this.form.get('eerdereSpecialist');
  }

  get contactHuisarts() {
    return this.form.get('contactHuisarts');
  }

}
