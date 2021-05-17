import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiError } from './api.error';
import { Record, SignUp, Token } from './api.interface';
import { API_URL, API_KEY } from './app.secrets';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private token: Token;

  constructor(
    private http: HttpClient,
    private toastCtl: ToastController
  ) { }

  setToken(token: Token) {
    this.token = token;
  }

  async getCurrentUser() {
    const url = API_URL + '/v1/users/current';
    const headers = this.getBearerHeader();
    return await this.get(url, headers);
  }

  async getCurrentProfile() {
    const url = API_URL + '/v1/profiles/current';
    const headers = this.getBearerHeader();
    return await this.get(url, headers);
  }

  async getProfileRoles() {
    const url = API_URL + '/v1/profiles/roles';
    const headers = this.getBearerHeader();
    return await this.get(url, headers);
  }

  async newRecord(body: Record) {
    const url = API_URL + '/v1/records';
    const headers = this.getBearerHeader();
    return await this.post(url, body, headers);
  }

  async newSheet() {
    const url = API_URL + '/v1/sheets';
    const headers = this.getBearerHeader();
    return await this.post(url, {}, headers);
  }

  async signUp(body: SignUp) {
    const url = API_URL + '/v1/users';
    const headers = this.getApyKeyHeader();
    return await this.post(url, body, headers);
  }

  async login(email: string, password: string) {
    const url = API_URL + '/v1/token-obtain-pair';
    const headers = this.getApyKeyHeader();
    const body = { email, password };
    return await this.post(url, body, headers);
  }

  async unlockProfile(id: number, pin: string) {
    const url = API_URL + '/v1/profiles/' + id + '/unlock';
    const headers = this.getBearerHeader();
    const body = { pin };
    return await this.post(url, body, headers);
  }

  async getProfileList(filter: string = '') {
    const url = API_URL + '/v1/profiles?' + filter;
    const headers = this.getBearerHeader();
    return await this.get(url, headers);
  }

  async getRecordList(filter: string = '') {
    const url = API_URL + '/v1/records?' + filter;
    const headers = this.getBearerHeader();
    return await this.get(url, headers);
  }

  async getSheetList(by: string) {
    const url = API_URL + '/v1/sheets?by=' + by;
    const headers = this.getBearerHeader();
    return await this.get(url, headers);
  }

  async getSheet(sheetId: number) {
    const url = API_URL + '/v1/sheets/' + sheetId;
    const headers = this.getBearerHeader();
    return await this.get(url, headers);
  }

  getBearerHeader() {
    return new HttpHeaders({
      Authorization: 'Bearer ' + this.token.access
    });
  }

  getApyKeyHeader() {
    return new HttpHeaders({
      Authorization: 'Api-Key ' + API_KEY
    });
  }

  get(url: string, headers: HttpHeaders) {
    return new Promise((resolve, reject) => {
      this.http.get(url, { headers }).subscribe(
        results => {
          resolve(results);
        },
        error => {
          if (error.status >= 400 && error.status <= 499) {
            reject(new ApiError(error.error, error.status));
          } else {
            this.showError(error.message);
          }
        }
      );
    });
  }

  post(url: string, body: any, headers: HttpHeaders) {
    return new Promise((resolve, reject) => {
      this.http.post(url, body, {headers}).subscribe(
        results => {
          resolve(results);
        },
        error => {
          if (error.status >= 400 && error.status <= 499) {
            reject(new ApiError(error.error, error.status));
          } else {
            this.showError(error.message);
          }
        }
      );
    });
  }

  async showError(message: string) {
    const toast = await this.toastCtl.create({
      message,
      duration: 5000,  // 5s,
      position: 'bottom'
    });
    await toast.present();
  }
}
