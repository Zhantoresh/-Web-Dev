import { Component } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../model';
import { RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  imports: [RouterLink, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent {
  albums: Album[] = [];
  newAlbumTitle: string = '';

  constructor(
    private albumsService: AlbumsService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.albumsService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  deleteAlbum(id: number) {
    console.log(`Attempting to delete album with ID: ${id}`);
    this.albumsService.deleteAlbum(id).subscribe((data) => {
      this.albums = data;
      console.log('Updated albums list: ', this.albums);
    });
    this.cdRef.detectChanges();
  }

  createAlbum() {
    if (!this.newAlbumTitle.trim()) return;

    const newAlbum: Album = {
      id: Math.floor(Math.random() * 10000),
      title: this.newAlbumTitle,
    };

    this.albumsService.addAlbum(newAlbum).subscribe((album) => {
      this.albums.push(album);
      this.cdRef.detectChanges();
    });

    this.newAlbumTitle = '';
  }
}
