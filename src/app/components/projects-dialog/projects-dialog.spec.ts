import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDialog } from './projects-dialog';

describe('ProjectsDialog', () => {
  let component: ProjectsDialog;
  let fixture: ComponentFixture<ProjectsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
