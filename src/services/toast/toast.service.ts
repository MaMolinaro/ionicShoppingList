import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";


@Injectable()
export class ToastService {
    constructor(private tostCtrl: ToastController) {}

    show(message: string, duration: number = 3000) {
        return this.tostCtrl
            .create({
                message,
                duration
            }).present();
    }
}