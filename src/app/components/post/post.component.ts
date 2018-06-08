import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
post: any [] =[];
  constructor(public postService: PostService) { }

  ngOnInit() {
    this.postService.getAll()
    .subscribe ((value:any) =>{
console.log(value);
this.post = value;
  });

}
}