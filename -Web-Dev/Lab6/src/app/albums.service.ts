import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map } from 'rxjs';
import { Album, Photo } from './model';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = 'https://jsonplaceholder.typicode.com/albums';
  private albumsCache: any[] = [];

  getAlbums(): Observable<Album[]> {
    if (this.albumsCache.length > 0) {
      return of(this.albumsCache);
    } else {
      return this.http.get<Album[]>(this.apiUrl).pipe(
        map((albums) => {
          this.albumsCache = albums;
          return albums;
        })
      );
    }
  }

  addAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.apiUrl, album).pipe(
      map((newAlbum) => {
        this.albumsCache = [];
        return newAlbum;
      })
    );
  }
  deleteAlbum(id: number): Observable<Album[]> {
    this.albumsCache = this.albumsCache.filter((album) => album.id !== id);
    return of(this.albumsCache);
  }

  getAlbum(id: number): Observable<Album> {
    const album = this.albumsCache.find((a) => a.id === id);
    if (album) {
      return of(album);
    } else {
      return this.http.get<Album>(`${this.apiUrl}/${id}`);
    }
  }

  updateAlbum(id: number, updatedAlbum: Album): Observable<any> {
    this.albumsCache = this.albumsCache.map((album) =>
      album.id === id ? updatedAlbum : album
    );
    return of(updatedAlbum);
  }

  getPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/${id}/photo`);
  }
}
