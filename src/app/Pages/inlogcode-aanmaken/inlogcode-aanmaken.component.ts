import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inlogcode-aanmaken',
  templateUrl: './inlogcode-aanmaken.component.html',
  styleUrls: ['./inlogcode-aanmaken.component.scss']
})
export class InlogcodeAanmakenComponent implements OnInit {
  @ViewChild('content') el: ElementRef | undefined;

  form: FormGroup = this.formBuilder.group({
    loginCode: ['', Validators.required],
  });
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private router: Router
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
    localStorage.setItem('test', '1')
    this.router.navigate(['/home']);
  }
  get loginCode() { return this.form.get('loginCode'); }

  dismissModal() {
    this.modalService.dismissAll();
  }

}
