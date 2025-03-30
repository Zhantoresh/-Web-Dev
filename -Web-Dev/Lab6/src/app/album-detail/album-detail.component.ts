import { Component } from '@angular/core';
import {Album} from '../model';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {AlbumsService} from '../albums.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
   album!: Album;
   newTitle: string = '';

   constructor(private route: ActivatedRoute,
               private albumsService: AlbumsService,
               private router: Router) {
   }

   ngOnInit(): void {
     const id = Number(this.route.snapshot.paramMap.get('id'));
     this.albumsService.getAlbum(id).subscribe(album => {
       this.album = album;
       this.newTitle = album.title;
     })
   }

   saveTitle() {
     if(this.album) {
       this.albumsService.updateAlbum(this.album.id, {...this.album, title: this.newTitle}).subscribe(updatedAlbum => {
         this.album.title = updatedAlbum.title;
       })
     }
   }
   goBack() {
     this.router.navigate(['/albums']);
   }
}
