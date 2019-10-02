import { Component, OnInit, Inject } from '@angular/core';
import { Feature } from './../feature.motel';
import { Router } from '@angular/router';
import { Observable, merge} from 'rxjs'
import { AngularFirestore, AngularFirestoreCollection }  from '@angular/fire/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
   loading = true;
   features: [Feature];
   feature: Feature;
   id: String;
   votes: number;
  constructor(
     private afs: AngularFirestore,
     private router: Router,
     private dialog: MatDialog
  ) { this.loading = true; }


addFeature() {
   this.router.navigateByUrl('/form');
}

addVote(id) {
   this.afs.collection("Features").doc<Feature>(`${id}`).valueChanges().subscribe(f => {
      this.feature = JSON.parse(JSON.stringify(f));
   })
   this.afs.collection("Features").doc<Feature>(`${id}`).set({
      votes: this.feature.votes + 1
   }, {merge: true});
}

viewButton(id) {
   this.dialog.open(DialogOverviewExampleDialog, {
      width: '60%', data: {
         id: id
      }
   })
}

  ngOnInit() {
   setTimeout(() => {
 
      this.afs.collection("Features").valueChanges().subscribe(features => {
         this.features = JSON.parse(JSON.stringify(features));
         this.loading = false;
         console.log(this.features);
      });
    }, 1000)
  }
}

@Component({
   selector: 'feature-dialog',
   templateUrl: 'feature-dialog.html',
 })

 export class DialogOverviewExampleDialog {
   feature: Feature;
   loading = true;
   constructor(
     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
     public afs: AngularFirestore,
     @Inject(MAT_DIALOG_DATA) public data: any) {
      this.afs.collection("Features").doc<Feature>(`${data.id}`).valueChanges().subscribe(feature => {
         this.feature = JSON.parse(JSON.stringify(feature));
         this.loading = false;
         console.log(this.feature);
      });
     }

   addVote(id) {
      this.afs.collection("Features").doc<Feature>(`${id}`).valueChanges().subscribe(f => {
         this.feature = JSON.parse(JSON.stringify(f));
      })
      this.afs.collection("Features").doc<Feature>(`${id}`).set({
         votes: this.feature.votes + 1
      }, {merge: true});
   }

   onNoClick(): void {
     this.dialogRef.close();
   }
 
 }
