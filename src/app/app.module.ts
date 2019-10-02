import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { BoardComponent } from './board/board.component';
import { MatStepperModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatChipsModule, MatIconModule, MatCardMdImage, MatCardModule, MatOptionModule, MatSelectModule, MatSnackBarModule, MatSpinner, MatProgressSpinnerModule, MatRippleModule, MatDialogModule, MatBadgeModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturesComponent } from './features/features.component';
import { Feature } from './feature.motel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogOverviewExampleDialog } from './features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BoardComponent,
    FeaturesComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatBadgeModule,
    MatDialogModule,
    MatIconModule,
    MatStepperModule,
    MatRippleModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [AngularFirestore, Feature],
  bootstrap: [AppComponent]
})
export class AppModule { }
