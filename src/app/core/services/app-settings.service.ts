import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppSetingsService {

private settingsResourceURL = './assets/app-settings.json';

    constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

    public getAppSettings (key): string {
        const settings = localStorage.getItem(key);
        if (!settings) {
            this.http.get(this.settingsResourceURL).subscribe(data => {
                return data;
            });
        } else {
            return settings;
        }
    }
}
