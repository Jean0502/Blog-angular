import { Component, OnInit } from '@angular/core';
import { PostPreviewComponent } from "./componets/post-preview/post-preview.component";
import { HeaderData, HeaderService } from '../../service/header.service';
import { PostPreview } from '../../types/post-preview.tipe';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { forkJoin } from 'rxjs';
import matter from 'gray-matter-browser';

type HomeData={
  posts:Array<string>
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostPreviewComponent,HttpClientModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  private uiData: HeaderData = {
    title: 'BLOG DE JEAN',
    subtitle: 'Un inicio',
    thumbnail: 'https://www.japonalternativo.com/wp-content/uploads/2020/12/porque-a-japon-se-le-llama-el-imperio-del-sol-naciente.jpg'
  }

  posts: Array<PostPreview>=[]

  constructor(private headerService:HeaderService, private http:HttpClient){}

  ngOnInit(){
    const pathHomeData='assets/home/home-data.json'
    this.headerService.uiData.set(this.uiData)
    this.http.get<HomeData>(pathHomeData).subscribe({
      next: data=> {
        const requests= data.posts.map(slug=>this.http.get(
          `assets/posts/${slug}/post.md`,
         {responseType:'text'}))
         forkJoin(requests).subscribe({
          next: allPostsDetails=> {
            this.posts=allPostsDetails.map(markdownFile=>{
              const { title='',subtitle='',slug='',author='',publicationDate=''} = matter(markdownFile).data;
              return{title,subtitle,slug,author,publicationDate}
            })
          },
          error:error=> console.error(error)
         })
      },
      error: error => console.error(error)
    })
  }
}
