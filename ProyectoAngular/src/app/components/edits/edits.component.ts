import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edits',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edits.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditsComponent implements OnInit{

  public title: string;
  public project: Project;
  public save_project:any; 
  public status: string;
  public filesToUpload: Array<File> = [];
 
  constructor(
      private _projectService: ProjectService,
      private _uploadService: UploadService,
      private _router: Router,
      private _route: ActivatedRoute
    ){
      this.title = "Editar Proyecto";
      this.status = '';
      this.project = new Project('','','','',2023,'','');
     }
 
     ngOnInit(): void {
      this._route.params.subscribe(params =>{
        let id = params['id'];
        this.getProject(id);
      })
    }
  
    getProject(id:any){
      this._projectService.getProject(id).subscribe(
  response => {
    this.project = response.project;
  },
  error=>{
    console.log(<any>error);
  }
      )
    }

    onSubmit(form:any){
      this._projectService.updateProjects(this.project).subscribe(
        response=>{
          if (response.project) {
            this.save_project= response.project;
            this.status = 'true';
          } else {
            this.status = 'false';
          }
        },
        error=>{
          console.log(<any>error);
        }
      )
    }
    fileChangeEvent(fileInput:any){ 
      console.log(fileInput);
      this.filesToUpload = <Array<File>>fileInput.targer.files;
    }
}
