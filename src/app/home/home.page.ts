import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { IonIntlTelInputValidators } from 'dist';

//import { IonIntlTelInputValidators } from 'ion-intl-tel-input';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    isDarkMode = false;
    phone = '+92 300 1234567';
    phone2 = '+1 403 6053099';
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
    preferredCountries = ['ca', 'us'];
    selectFirstCountry = true;
    separateDialCode = true;

    disableTest = false;

    constructor() { }

    ngOnInit() {
        this.form = new UntypedFormGroup({
            phoneNumber: new UntypedFormControl({
                value: '+923001234567',
                disabled: this.disableTest
            }, [
                //  Validators.required,
                IonIntlTelInputValidators.phone
            ]),
            phoneNumber2: new UntypedFormControl({
                value: '+140360539988',
                disabled: this.disableTest
            }, [
                //  Validators.required,
                IonIntlTelInputValidators.phone
            ]),
            phoneNumber3: new UntypedFormControl({
                value: ''
            }, [
                //  Validators.required,
                IonIntlTelInputValidators.phone
            ]),
        });
    }


    logPhone() {
        console.log(this.phone);
    }

    get phoneNumber() { return this.form.get('phoneNumber'); }

    get phoneNumber2() { return this.form.get('phoneNumber2'); }

    onSubmit() {
        //  console.log(this.phoneNumber);
        console.log(this.phoneNumber.value);
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        // how do I add ion-palette-dark class to the html tag?
        document.documentElement.classList.toggle('ion-palette-dark', this.isDarkMode);
        // document.html.classList.toggle('dark', this.isDarkMode);
    }
    

}
