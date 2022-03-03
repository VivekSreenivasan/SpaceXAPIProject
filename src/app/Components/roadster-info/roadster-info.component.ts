import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RoadsterGQL } from 'src/generated/graphql';
@Component({
  selector: 'app-roadster-info',
  templateUrl: './roadster-info.component.html',
  styleUrls: ['./roadster-info.component.scss']
})
export class RoadsterInfoComponent{
  constructor(private roadsterProvider:RoadsterGQL) { 
    
  }
  roadsterInformation$ = this.roadsterProvider.fetch().pipe(map((res) => res.data.roadster));

}
