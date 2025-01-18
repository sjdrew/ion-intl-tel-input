import { Component, inject } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    platform = inject(Platform);
    constructor(
    ) {
        this.initializeApp();
    }

    initializeApp() {

    }

}
