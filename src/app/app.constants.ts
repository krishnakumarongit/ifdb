import { Injectable } from '@angular/core';

@Injectable()
export class AppConstants {
    public Server = 'http://localhost/';
    public ApiUrl = 'api/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
