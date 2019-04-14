import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Bug } from '../../core/models/bugs.model';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugsResolver implements Resolve<Bug[]>{

  constructor(private bugsService: ApiServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bug[]> {
    return this.bugsService.getBugs().pipe(map(bugs => bugs as Bug[]));
  }
}
