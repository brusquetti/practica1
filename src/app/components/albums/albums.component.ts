import { Component, OnInit } from '@angular/core';
import {AlbumsService} from '../../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
albums: any [] = [];

  constructor(public albumsService: AlbumsService) { }

  ngOnInit() {
    this.albumsService.getAll()
    .subscribe ((value:any) =>{
console.log(value);
this.albums = value;
  });
  }

}
