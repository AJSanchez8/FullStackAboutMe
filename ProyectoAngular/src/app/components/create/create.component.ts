import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
 
  public title: string;
  public project: Project;
  public save_project:any; 
  public status: string;
  public filesToUpload: Array<File> = [];
  public url: string;
 
  constructor(
      private _projectService: ProjectService,
      private _uploadService: UploadService,
      private  _route: ActivatedRoute,
      private _router: Router
  )
    {
      this.title = "Crear Proyecto";
      this.project = new Project('','','','',2023,'','');
      this.status = '';
      this.url = Global.url;
     }
 
  ngOnInit() {
  }
  onSubmit(form: any) {
    console.log('Ha llegado hasta aquí, la siguiente línea no debería dar error');
    
    this._projectService.saveProject(this.project).subscribe(
      (response: any) => {
        if (response.project) {
          this.save_project= response.project;
          this.status = 'true';
          form.reset();
        } else {
          this.status = 'false';
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  fileChangeEvent(fileInput:any){ 
    console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.targer.files;
  }
}