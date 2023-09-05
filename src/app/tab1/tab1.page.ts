import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  movies = [
    { name: 'DeadPool', image: '..//../assets/peli1.jpg',
    description: 'Una película emocionante que te mantendrá al borde de tu asiento.',},
    { name: 'Wolverine', image: '..//../assets/peli2.jpg' },
    { name: 'Oppenhaim', image: '..//../assets/peli3.jpg' },
    { name: 'M I : 5', image: '..//../assets/peli4.jpg' },
    { name: 'Insidius', image: '..//../assets/peli5.jpg' },
    { name: 'Joker', image: '..//../assets/peli6.jpg' },
    // ...añadir más películas
  ];

  constructor(private navCtrl: NavController, private router: Router) {}

  openMovieDetails(movie: any) {
    this.router.navigate(['/tabs/tab2', { movieId: movie.name }]);
  }
  
  logout() {
    // Agrega aquí la lógica para cerrar sesión (por ejemplo, limpiar tokens, variables, etc.)
    
    // Redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

}
