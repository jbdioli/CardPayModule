import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  payForm: FormGroup;

  theDate = new Date();
  today: string;
  yearMax: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initPayForm();


    // Get today date
    const mm = String(this.theDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = this.theDate.getFullYear();

    this.today = yyyy + '-' + mm;
    this.yearMax = (yyyy + 4).toString();
  }


  initPayForm() {
    this.payForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]],
      expiryDate: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[0-9]{3}$')]],
      cardHolder: ['', [Validators.required]],
    });
  }

  onPay() {
    console.log('PayForm Values: ', this.payForm.value);

  }
}
