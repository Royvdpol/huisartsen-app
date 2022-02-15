import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbCalendar, NgbDateStruct, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {
  @ViewChild('content') el: ElementRef | undefined;

  form: FormGroup = this.formBuilder.group({
    datum: ['', Validators.required],
    duurConsult: ['', Validators.required],
  });

  date: { year: number, month: number } = {year: 2021, month: 12};
  dateToday: NgbDateStruct = this.calendar.getToday();
  dateMaxReservation: NgbDateStruct = this.calendar.getNext(this.calendar.getToday(), 'm', 1)

  constructor(private formBuilder: FormBuilder, private calendar: NgbCalendar, private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  dismissModal() {
    this.modalService.dismissAll();
  }

  openModal() {
    this.modalService.open(this.el);
  }

  get duurConsult() { return this.form.get('duurConsult'); }

}
