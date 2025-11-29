import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-projects-dialog',
  imports: [MATERIAL_MODULES, SlickCarouselModule],
  templateUrl: './projects-dialog.html',
  styleUrl: './projects-dialog.scss',
  standalone: true,
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsDialog {
  @Input() project: any;

   slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 1 } },
      { breakpoint: 800,  settings: { slidesToShow: 1 } },
      { breakpoint: 480,  settings: { slidesToShow: 1 } }
    ]
  };
}
