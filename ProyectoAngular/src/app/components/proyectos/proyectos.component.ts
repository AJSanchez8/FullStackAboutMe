import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  providers: [ProjectService]
})
export class ProyectosComponent implements OnInit {
  public projects: Project[];


  constructor(private _projectService: ProjectService){
    this.projects = [];

  }
  ngOnInit(){

    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response => {
        console.log(response);
        if(response.projects){
          this.projects = response.projects;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
