import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WSS_URL } from '../app.secrets';


@Component({
  selector: 'app-qr-encoder',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  @Input()
  transaction: string;

  elementType = 'canvas';
  ws: WebSocket;

  constructor(
    private modalCtl: ModalController
  ) { }

  closeModal(data: string = '') {
    this.modalCtl.dismiss(data);
    this.ws.close();
  }

  startWebSocket(url: string) {
    this.ws = new WebSocket(WSS_URL + '/transactions/' + this.transaction);
    this.ws.onmessage = (ev: any) => {
      this.closeModal(ev.data);
    };
  }

  ngOnInit() {
    console.log(this.transaction);
    const url = WSS_URL + '/transactions/' + this.transaction;
    this.startWebSocket(url);
  }
}
