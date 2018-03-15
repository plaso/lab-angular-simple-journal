import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Entry } from '../../shared/models/entry.model';
import { JournalEntriesService } from '../../shared/services/journal-entries.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  entry: Entry = new Entry();

  @Output() submitCreate: EventEmitter<Entry> = new EventEmitter<Entry>();

  constructor(private journalEntriesService: JournalEntriesService) { }

  ngOnInit() {
  }

  onSubmitCreateEntry(form: NgForm) {
    this.journalEntriesService.create(this.entry)
      .subscribe( entry => {
        this.submitCreate.emit(entry);

        this.entry = new Entry();
        form.reset();
      });
  }

}
