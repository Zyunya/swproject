import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ApplyService {

	private API  = environment.API_ENDPOINT;

	constructor(private http: Http) {

	}

	public apply(data): Observable<any> {
		let Head = new Headers({ 'Content-Type': 'application/json' })
		return this.http.post(this.API.APPLY, data, { headers: Head })
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
			return body ;
	}

	private handleError(error: Response ) {
		let errMsg = (error.status ? `${error.status} - ${error.statusText}` : 'Server error')
		return Observable.throw(error.json());
	}

}
