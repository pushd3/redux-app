import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(public http: HttpClient) {}

  public getUsers() {
    return this.http.get(`https://entity.getsandbox.com/entities`);
  }
}