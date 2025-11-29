import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material';
import { ProjectsService } from '../../services/projects';
import { MatDialog } from '@angular/material/dialog';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-projects',
  standalone: true,  
  imports: [MATERIAL_MODULES, CarouselModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Projects {

  projects: any[] = [];

  constructor(
    public projectService: ProjectsService,
    public dialog: MatDialog
  ){     
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

}
