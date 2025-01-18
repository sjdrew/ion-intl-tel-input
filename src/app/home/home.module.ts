import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonIntlTelInputModule } from 'dist';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    IonIntlTelInputModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
