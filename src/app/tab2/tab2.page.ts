import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  movieName: string;
  movieDescription: string;
  movieId: string = '';
  likeCount: number = 0;
  isFavorite: boolean = false;




  constructor(private navCtrl: NavController, private router: Router, private route: ActivatedRoute,
    private alertController: AlertController) {
    this.movieName = '';
    this.movieDescription = '';
  }


  ionViewWillEnter() {
    const movieId = this.route.snapshot.paramMap.get('movieId');
    if (movieId !== null) {
      this.movieName = movieId;
      this.movieDescription = this.getMovieDescription(movieId);
    }
  }

  getMovieDescription(movieName: string): string {
    // Implementa la lógica para obtener la descripción de la película
    // basada en el nombre. Puedes usar una base de datos, una API, o datos estáticos.
    // Por ahora, se usará una descripción predeterminada.
    return 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.';
  }

  logout() {
    // Agrega aquí la lógica para cerrar sesión (por ejemplo, limpiar tokens, variables, etc.)

    // Redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  incrementLikeCount() {
    this.likeCount++;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  async showShareAlert() {
    const alert = await this.alertController.create({
      header: 'Compartir película',
      message: `Deseas compartir ??`,
      buttons: [
        {
          text: 'WhatsApp',
          cssClass: 'logo-whatsapp',
          handler: () => {
            // Lógica para compartir en WhatsApp
          },
          
        },
        {
          text: 'Facebook',
          cssClass: 'logo-facebook',
          handler: () => {
            // Lógica para compartir en Facebook
          },
        },
        {
          text: 'Instagram',
          cssClass: 'logo-instagram',
          handler: () => {
            // Lógica para compartir en Instagram
          },
        },
        {
          text: 'Twitter',
          cssClass: 'logo-twitter',
          handler: () => {
            // Lógica para compartir en Twitter
          },
        },
      ],
    });

    await alert.present();
  }

}
