import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { BoardComponent } from './board/board.component';
import { MatStepperModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatChipsModule, MatIconModule, MatCardMdImage, MatCardModule, MatOptionModule, MatSelectModule, MatSnackBarModule, MatSpinner, MatProgressSpinnerModule, MatRippleModule, MatDialogModule, MatBadgeModule, MatSort, MatSortModule, MatProgressBarModule, MatDividerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturesComponent } from './features/features.component';
import { Feature } from './feature.motel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogOverviewExampleDialog } from './features/features.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BoardComponent,
    FeaturesComponent,
    DialogOverviewExampleDialog,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    MatInputModule,
    MatDividerModule,
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
    MatSortModule,
    MatDialogModule,
    MatIconModule,
    MatStepperModule,
    MatRippleModule,
    MatProgressBarModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [AngularFirestore, Feature],
  bootstrap: [AppComponent]
})
export class AppModule { }
