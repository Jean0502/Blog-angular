import { Component } from '@angular/core';
import { HeaderData, HeaderService } from '../../service/header.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  private uiData: HeaderData = {
    title: 'Un poco sobre nosotros',
    subtitle: 'Este el el subtitulo',
    thumbnail: 'https://placehold.co/600x400'
  }

  constructor(private headerService:HeaderService){
    headerService.uiData.set(this.uiData)

  }

}
