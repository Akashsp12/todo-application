import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastrSetting: any
  constructor(private toastr: ToastrService) {
    this.toastrSetting = {
      timeOut: 2000,
      progressBar: true,
      limit: 3,
      Animation: 'fade',
      easing: 'ease-in',
      positionClass: 'toast-top-right',
      progressAnimation: 'decreasing',
      closeButton: true

    }
  }


  success(message: string, title: string) {
    this.toastr.success(message, title, this.toastrSetting);
  }
  error(message: string, title: string) {
    this.toastr.error(message, title, this.toastrSetting);
  }
  info(message: string, title: string) {
    this.toastr.info(message, title, this.toastrSetting);
  }
  warning(message: string, title: string) {
    this.toastr.warning(message, title, this.toastrSetting);
  }
}