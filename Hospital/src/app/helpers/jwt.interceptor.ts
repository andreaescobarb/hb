import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && (this.authenticationService.currentUserValue as any).access_token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${(this.authenticationService.currentUserValue as any).access_token}`
                }
            });
        }

        return next.handle(request);
    }
}