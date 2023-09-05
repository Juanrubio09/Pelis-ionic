import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user = {
    name: 'Juan Pablo rubio diaz',
    avatar: '../../assets/user1.jpg',
    email: 'jprubio93@misena.com',
    phone: '123-456-7890',
    // ...agrega más detalles de la cuenta si es necesario
  };

  constructor(private navCtrl: NavController, private router: Router) {}

  logout() {
    // Agrega aquí la lógica para cerrar sesión (por ejemplo, limpiar tokens, variables, etc.)
    
    // Redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

}
