import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  contactInfo = {
    phone: '+40 721 246 424',
    email: 'accenteculturalecristian@gmail.com',
    address: 'Strada Ghimbavului 40A, Cristian, jud. Brașov, 507055'
  };

  constructor() {

  }

  ngOnInit(): void {
    this.getWorkshops()
  }

  workshopList = signal<WorkshopModel[]>([]);
  getWorkshops() {
    this.workshopService.getWorkshops().subscribe({
      next: (response: WorkshopModel[]) => {
        console.log('Workshops loaded:', response);
          this.workshopList.set(response);
      },
      error: () => {
        console.error('Error loading workshops:', Error); // Add this
      }
    })
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
