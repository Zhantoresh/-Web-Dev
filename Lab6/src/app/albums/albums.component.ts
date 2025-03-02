import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {NgFor, CommonModule} from "@angular/common";
import {ALBUMS} from "../fake-db";
import {RouterLink} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    ALBUMS,
    RouterLink,
    FormsModule
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  // albums!: Album[];
  // newAlbum: Album;
  // loaded: boolean = false;

  constructor(private albumService: AlbumsService) {
    // this.newAlbum = {
    //   userId: 11,
    //   id: 101,
    //   title: ''
    // }
  }

  ngOnInit() {
    // this.getAlbums_1();
  }

  // addAlbum() {
  //   this.albumService.createAlbum(this.newAlbum).subscribe((album) => {
  //     this.albums.unshift(album);
  //     alert('Album created');
  //     this.newAlbum = {} as Album;
  //   });
  // }
  //
  // getAlbums_1() {
  //   this.loaded = false;
  //   this.albumService.getAlbums().subscribe((albums) => {
  //     this.albums = albums;
  //     this.loaded = true;
  //     console.log(this.albums)
  //   });
  // }
  //
  // deleteAlbum(id: number) {
  //   this.albums = this.albums.filter((p) => p.id !== id);
  //   this.albumService.deleteAlbum(id).subscribe(() => {
  //     console.log('deleted');
  //   });
  // }


  // protected readonly NgFor = NgFor;
}
