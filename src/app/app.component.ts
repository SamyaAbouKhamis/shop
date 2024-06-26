import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,FormsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
 
 

  constructor(private platform:Platform,private router:Router) {
    this.initializeApp();
    
  }
  initializeApp() {
    this.platform.ready().then(()=>{
      // this.router.navigateByUrl('splash-screen');
    })
  }
  

   
}
