import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpRequestsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let headers = new HttpHeaders();
    headers = headers.set("securityKey", "anykey");

    const reqwithCredentials = request.clone({
      headers
    });
    
    return next.handle(reqwithCredentials);
  }
}
