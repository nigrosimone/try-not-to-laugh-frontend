import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectGameComponent } from './select-game.component';
import { SelectGameRoutingModule } from './select-game-routing.module';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [SelectGameComponent],
  imports: [
    CommonModule,
    SelectGameRoutingModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    SelectGameComponent
  ]
})
export class SelectGameModule { }
