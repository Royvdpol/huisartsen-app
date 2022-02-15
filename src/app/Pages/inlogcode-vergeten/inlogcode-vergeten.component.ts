import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-inlogcode-vergeten',
  templateUrl: './inlogcode-vergeten.component.html',
  styleUrls: ['./inlogcode-vergeten.component.scss']
})
export class InlogcodeVergetenComponent implements OnInit {

  @ViewChild('content') el: ElementRef | undefined;

  form: FormGroup = this.formBuilder.group({
    mobile: ['', Validators.required],
  });
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal
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
    this.modalService.open(this.el);
  }
  get mobile() { return this.form.get('mobile'); }

  dismissModal() {
    this.modalService.dismissAll();
  }
}

