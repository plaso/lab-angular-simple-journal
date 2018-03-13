import { Routes } from '@angular/router';
import { EntryListComponent } from './components/entry-list/entry-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: EntryListComponent }
];
