import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-process-order-form',
  templateUrl: './process-order-form.component.html',
  styleUrls: ['./process-order-form.component.css']
})
export class ProcessOrderFormComponent implements OnInit, OnDestroy {

  streets: Array<string> = ['Pushkinskaja', 'Zhukava', 'Pritytskogo', 'Zagumennaja'];
  orderForm: FormGroup;
  emailErrorMessage: string;
  nameErrorMessage: string;

  private sub: Subscription;
  private validationMessages = {
    required: 'This field is required',
    minlength: 'Field cant be smaller than ',
    maxlength: 'Field cant be greater than ',
    email: 'Please enter a valid email.'
  };

  constructor (private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.patchFormValues();
    this.watchValueChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save() {
    // Form model
    console.log(this.orderForm);
    // Form value
    console.log(`Saved: ${JSON.stringify(this.orderForm.value)}`);
  }

  // get array of phones
  get phones(): FormArray {
    return <FormArray>this.orderForm.get('phones');
  }

  // add aditional phone to form model array of controls
  addPhone () {
    this.phones.push(new FormControl(''));
  }

  // delete unnecessary phone
  deletePhone (index) {
    this.phones.removeAt(index);
  }

  // add error while changing fields
  private watchValueChanges() {
    const emailControl = this.orderForm.get('email');
    this.sub = emailControl.valueChanges
      .subscribe(value => this.emailErrorMessage = this.getMessage(emailControl));
    const nameControl = this.orderForm.get('name');
    const namesub = nameControl.valueChanges
    .subscribe(value => this.nameErrorMessage = this.getMessage(nameControl));
    this.sub.add(namesub);
  }

  // get error message to display for invalid field
  private getMessage(c: AbstractControl) {
    let message = '';
    if ((c.touched || c.dirty) && c.errors) {
      const keys = Object.keys(c.errors);
      message = keys.map((key, index) => {
          if (key.endsWith('length')) {
            const requiredLength =
                Object.values(c.errors)
                .find((v, i) => i === index)['requiredLength'];
            return this.validationMessages[key] + requiredLength;
          } else { return this.validationMessages[key]; }
        })
        .join(' ');
    }
    return message;
  }

  // build order form model
  private buildForm() {
    this.orderForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      // phone: ['', [Validators.required, Validators.maxLength(13) ]],
      phones: new FormArray([new FormControl('')]),
      email: ['', [Validators.email]],
      delivery: false,
      street: '',
      house: '',
      room: '',
    });
  }

  // add defaul name to form model
  private patchFormValues() {
    this.orderForm.patchValue({
      name: 'Alena',
    });
  }
}
