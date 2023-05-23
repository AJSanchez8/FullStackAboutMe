import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from 'rxjs/operators';
import { Project } from "../models/project";
import { Global } from "./global";
import { Observable } from "rxjs";

@Injectable()
export class ProjectService{

    public url: string;

    constructor(private _http: HttpClient){
        this.url = Global.url;
    }

    testService(){
        return "Funciona el servicio de angular";
    }
    saveProject(project : Project): Observable<any>{
        let params= JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save-projects', params, {headers: headers});
    }

    getProjects(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'projects', {headers: headers});
    }

    getProject(id:any):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'project/'+id, {headers:headers})
    }

    deleteProjects(id:any): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'project/'+id, {headers:headers})
    }

    updateProjects(project:Project):Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'project/'+project._id, params, {headers:headers});
    }

}

