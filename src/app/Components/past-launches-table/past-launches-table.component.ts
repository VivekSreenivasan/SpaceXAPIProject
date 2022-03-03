import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { map } from 'rxjs';
import { LaunchesPastGQL } from 'src/generated/graphql';
@Component({
  selector: 'app-past-launches-table',
  templateUrl: './past-launches-table.component.html',
  styleUrls: ['./past-launches-table.component.scss']
})
export class PastLaunchesTableComponent{
  constructor(private pastLaunchesService:LaunchesPastGQL) {}
  pastLaunches$ = this.pastLaunchesService
    .fetch()
    .pipe(map((res) => res.data.launchesPast));
}
