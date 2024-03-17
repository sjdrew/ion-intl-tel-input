import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { IonIntlTelInputValidators } from 'projects/ion-intl-tel-input/src/public-api';

//import { IonIntlTelInputValidators } from 'ion-intl-tel-input';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  phone = '+92 300 1234567';
  form: UntypedFormGroup;

  defaultCountryIsoTest = 'ca';
  dialCodePrefix = '+';
  enableAutoCountrySelect = true;
  enablePlaceholder = true;
  fallbackPlaceholder = '';
  inputPlaceholder = '';
  maxLength = '15';
  modalTitle = 'Select Country';
  modalCssClass = '';
  modalSearchPlaceholder = 'Enter country name';
  modalCloseText = 'Close';
  modalCloseButtonSlot = 'end';
  modalCanSearch = true;
  modalShouldBackdropClose = true;
  modalShouldFocusSearchbar = true;
  modalSearchFailText = 'No countries found.';
  onlyCountries = [];
  preferredCountries = ['ca','us'];
  selectFirstCountry = true;
  separateDialCode = true;

  disableTest = false;

  constructor() { }

  ngOnInit() {
    this.form = new UntypedFormGroup({
      phoneNumber: new UntypedFormControl({
        value:  '+14036053001', //this.phone,
      //  value: '+923001234567',
      //  value: '+61423232324',
        disabled: this.disableTest
      }, [
      //  Validators.required,
        IonIntlTelInputValidators.phone
      ])
    });
  }


  logPhone() {
    console.log(this.phone);
  }

  get phoneNumber() { return this.form.get('phoneNumber'); }

  onSubmit() {
  //  console.log(this.phoneNumber);
    console.log(this.phoneNumber.value);
  }

}
