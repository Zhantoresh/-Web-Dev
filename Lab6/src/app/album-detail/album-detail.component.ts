import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, RouterModule} from "@angular/router";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params :ParamMap): void => {
      console.log(params);
    })
  }
}
