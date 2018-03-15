import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import './rxjs.operators';
import { routes } from './app.routes';

import { JournalEntriesService } from './shared/services/journal-entries.service';

import { AppComponent } from './app.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { SingleEntryComponent } from './components/single-entry/single-entry.component';
import { EntryFormComponent } from './components/entry-form/entry-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
