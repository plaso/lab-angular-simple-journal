import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from './../../shared/services/journal-entries.service';
import { Entry } from '../../shared/models/entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries: Array<Entry> = [];

  constructor(private journalEntriesService: JournalEntriesService) { }

  ngOnInit() {
    this.journalEntriesService.list()
      .subscribe( (entries) => this.entries = entries );
  }

}
