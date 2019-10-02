import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper, MatFormField }  from '@angular/material';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Feature, Category } from '../feature.motel';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   isLinear = true;
   surveyGroup: FormGroup;
   visible = true;
   selectable = true;
   removable = true;
   addOnBlur = true;
   categories: [Category];
   
   readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
     private _formBuilder: FormBuilder,
     private afs: AngularFirestore,
     private router: Router,
     private snackBar: MatSnackBar
     ) { }

  ngOnInit() {
   this.surveyGroup = this._formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      category: [''],
      customCategory: ['', Validators.minLength(3)],
      description: ['']
   });

   this.afs.collection("category").valueChanges().subscribe(category => {
      this.categories = JSON.parse(JSON.stringify(category));
   });
  }

  goBack() {
     this.router.navigateByUrl('');
  }

createFeature() {
   const title = this.surveyGroup.get("title");
   const category = this.surveyGroup.get("category");
   const customCategory = this.surveyGroup.get("customCategory");
   const description = this.surveyGroup.get("description");
   const id = this.afs.createId()
   return this.afs.collection("Features").doc<Feature>(id).set({
      id: id,
      title: title.value,
      category: category.value || customCategory.value,
      description: description.value,
      votes: 0,
      isCustom: true
   })
   .then(() => {
       this.afs.collection("category").doc<Category>(`${id}`).set({
         id: id,
         name: customCategory.value
      })
   })
   .then(() => {
      this.router.navigateByUrl('/')
      this.snackBar.open('Feature Added Successfully','', {duration: 2000})
    })

}

  
}
