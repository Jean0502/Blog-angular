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
    subtitle: 'Hola mundo',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qX0Xdg0KIOJKDZzNS3PL0K8zr-IcxFJuyg&s'
  }

  constructor(private headerService:HeaderService){
    headerService.uiData.set(this.uiData)

  }

}
