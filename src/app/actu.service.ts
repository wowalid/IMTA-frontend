import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { Actualite } from './model/Actualite';

@Injectable()
export class ActuService {
    url = "http://localhost:11041/actu/";
    constructor(private http:Http) { }
    postActu(actu:Actualite): Promise<Actualite> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url + 'post', actu, options).toPromise()
	           .then(this.extractData)
                   .catch(this.handleErrorPromise);
    }		
    private extractData(res: Response) {
	let body = res.json();
        return body || {};
    }
    private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
	console.error(error.message || error);
	return Promise.reject(error.message || error);
    }	
} 