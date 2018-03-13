import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalEntriesService } from '../../shared/services/journal-entries.service';
import { Entry } from '../../shared/models/entry.model';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry: Entry = new Entry();

  constructor(
    private routes: ActivatedRoute,
    private journalEntriesService: JournalEntriesService
  ) { }

  ngOnInit() {
    this.routes
      .params
      .subscribe( (params) => {
        this.journalEntriesService.get(params['id'])
          .subscribe( (entry) => this.entry = entry );
      });
  }

}
