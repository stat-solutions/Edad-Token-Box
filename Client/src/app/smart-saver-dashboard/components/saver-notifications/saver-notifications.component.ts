import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-saver-notifications',
  templateUrl: './saver-notifications.component.html',
  styleUrls: ['./saver-notifications.component.scss']
})
export class SaverNotificationsComponent implements OnInit {


  userForm: FormGroup;

  nextOfKin : FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

 this.userForm=   this.initialiseuserForm();

  }


  initialiseuserForm(): FormGroup {
    return this.fb.group({
     name: '',
     age: '',
     nextOfKin: this.fb.array([this.nextOfKinDetails()])

    }) ;

  }

  nextOfKinDetails(): FormGroup {
 return this.fb.group({
next_of_kin_name: '',
next_of_kin_age: '',
relationship: ''

 });

  }

get theNextOfKin(): FormArray {
  return this.userForm.get('nextOfKin') as FormArray;
}

addNextOfKinRecord() {
  this.theNextOfKin.push(this.nextOfKinDetails());
}

RemoveNextOfKinRecord(index) {
  this.theNextOfKin.removeAt(index);
}

processForm(){


}

}
