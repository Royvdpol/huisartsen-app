import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-doorverwijzing',
  templateUrl: './doorverwijzing.component.html',
  styleUrls: ['./doorverwijzing.component.scss']
})
export class DoorverwijzingComponent implements OnInit {
    form: FormGroup = this.formBuilder.group({
    klacht: ['', [Validators.required, Validators.minLength(3)]],
    specialist: ['', [Validators.required, Validators.minLength(3)]],
    eerdereKlacht: ['', Validators.required],
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

  get klacht() {
    return this.form.get('klacht');
  }

  get specialist() {
    return this.form.get('specialist');
  }

  get eerdereKlacht() {
    return this.form.get('eerdereKlacht');
  }

  get eerdereSpecialist() {
    return this.form.get('eerdereSpecialist');
  }

  get contactHuisarts() {
    return this.form.get('contactHuisarts');
  }
}
